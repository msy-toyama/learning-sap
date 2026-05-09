(function () {
  const chapters = window.courseData || [];
  const beginnerNotes = window.beginnerNotesData || [];
  const glossary = window.glossaryData || [];
  const quizzes = window.quizData || [];
  const state = {
    currentChapter: localStorage.getItem("sap-co-current-chapter") || "01",
    completed: new Set(JSON.parse(localStorage.getItem("sap-co-completed") || "[]")),
    query: ""
  };

  const el = {
    chapterNav: document.getElementById("chapterNav"),
    lessonPanel: document.getElementById("lessonPanel"),
    currentChapterTitle: document.getElementById("currentChapterTitle"),
    sectionToc: document.getElementById("sectionToc"),
    glossaryPreview: document.getElementById("glossaryPreview"),
    glossaryGrid: document.getElementById("glossaryGrid"),
    glossaryFilter: document.getElementById("glossaryFilter"),
    quizSection: document.getElementById("tab-quiz"),
      quizTabCount: document.getElementById("quizTabCount"),
      tabBtns: document.querySelectorAll(".tab-btn"),
      tabContents: document.querySelectorAll(".tab-content"),
    progressBar: document.getElementById("progressBar"),
    progressText: document.getElementById("progressText"),
    search: document.getElementById("globalSearch"),
    searchResults: document.getElementById("searchResults"),
    markComplete: document.getElementById("markComplete"),
    prev: document.getElementById("prevChapter"),
    next: document.getElementById("nextChapter")
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function chapterById(id) {
    return chapters.find((chapter) => chapter.id === id) || chapters[0];
  }

  function currentIndex() {
    return chapters.findIndex((chapter) => chapter.id === state.currentChapter);
  }

  function beginnerNoteByChapter(id) {
    return beginnerNotes.find((note) => note.chapterId === id);
  }

  function setChapter(id) {
    state.currentChapter = id;
    localStorage.setItem("sap-co-current-chapter", id);
    render();
    if (typeof switchTab === "function") switchTab("lesson");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function saveCompleted() {
    localStorage.setItem("sap-co-completed", JSON.stringify([...state.completed]));
  }

  function renderChapterNav() {
    el.chapterNav.innerHTML = `
      <div class="select-wrapper">
        <label for="chapterSelect" class="eyebrow" style="display:block; margin-bottom:8px;">章を選択</label>
        <select id="chapterSelect" class="chapter-select" aria-label="章を選択">
          ${chapters.map((chapter) => {
            const isActive = chapter.id === state.currentChapter;
            const done = state.completed.has(chapter.id);
            const doneMark = done ? " ✓" : "";
            return `<option value="${chapter.id}" ${isActive ? "selected" : ""}>${chapter.id}. ${escapeHtml(chapter.title)}${doneMark}</option>`;
          }).join("")}
        </select>
      </div>
    `;

    el.chapterNav.querySelector("#chapterSelect").addEventListener("change", (e) => {
      setChapter(e.target.value);
    });
  }

  function renderProgress() {
    const count = state.completed.size;
    const percent = chapters.length ? Math.round((count / chapters.length) * 100) : 0;
    el.progressBar.style.width = `${percent}%`;
    el.progressText.textContent = `${count} / ${chapters.length} 章 (${percent}%)`;
    el.markComplete.textContent = state.completed.has(state.currentChapter) ? "読了を外す" : "読了にする";
  }

  function renderLesson(chapter) {
    el.currentChapterTitle.textContent = `${chapter.id}. ${chapter.title}`;
    const beginnerNote = beginnerNoteByChapter(chapter.id);
    const sectionHtml = chapter.sections.map((section, index) => {
      const id = `section-${chapter.id}-${index}`;
      return `
        <section class="lesson-section" id="${id}">
          <p class="section-kicker">Section ${index + 1}</p>
          <h3>${escapeHtml(section.title)}</h3>
          <div class="article-body">
            ${section.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          </div>
          <details class="support-details">
            <summary>ポイント・実務例・試験対策を開く</summary>
            <div class="learning-note">
              <div>
                <h4>押さえるポイント</h4>
                <ul>${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
              </div>
              <div>
                <h4>実務イメージ</h4>
                <p>${escapeHtml(section.example)}</p>
              </div>
            </div>
            <p class="exam-tip"><strong>試験対策:</strong> ${escapeHtml(section.examTip)}</p>
          </details>
        </section>
      `;
    }).join("");

    const tableHtml = chapter.tables.map((table) => `
      <details class="table-panel">
        <summary>${escapeHtml(table.title)}を開く</summary>
        <div class="responsive-table">
          <table>
            <thead><tr>${table.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr></thead>
            <tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      </details>
    `).join("");

    const tocHtml = `
      <nav class="in-page-toc">
        <h3>章内目次</h3>
        <ol>
          ${chapter.sections.map((section, index) => `
            <li><a href="#section-${chapter.id}-${index}">${escapeHtml(section.title)}</a></li>
          `).join("")}
        </ol>
      </nav>
    `;

    const beginnerNoteHtml = beginnerNote ? `
      <section class="beginner-note-panel">
        <p class="eyebrow">初学者補足</p>
        <h3>${escapeHtml(beginnerNote.title)}</h3>
        <p>${escapeHtml(beginnerNote.intro)}</p>
        <div class="beginner-note-grid">
          ${beginnerNote.points.map((point) => `
            <article class="beginner-note-card">
              <strong>${escapeHtml(point.term)}</strong>
              <span>${escapeHtml(point.explanation)}</span>
            </article>
          `).join("")}
        </div>
        <ul>
          ${beginnerNote.pitfalls.map((pitfall) => `<li>${escapeHtml(pitfall)}</li>`).join("")}
        </ul>
      </section>
    ` : "";

    el.lessonPanel.innerHTML = `
      <header class="lesson-hero">
        <div>
          <p class="eyebrow">Chapter ${chapter.id}</p>
          <h2>${escapeHtml(chapter.title)}</h2>
          <p>${escapeHtml(chapter.summary)}</p>
        </div>
      </header>

      ${tocHtml}
      ${beginnerNoteHtml}

      <details class="overview-details">
        <summary>この章の学習目標と試験観点</summary>
        <div class="objective-grid">
          <div>
            <h3>学習目標</h3>
            <ul>${chapter.objectives.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
          <div>
            <h3>試験で狙われる観点</h3>
            <ul>${chapter.examFocus.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
        </div>
      </details>

      <details class="flow-panel" open>
        <summary>${escapeHtml(chapter.flow.title)}</summary>
        <ol>${chapter.flow.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      </details>

      ${sectionHtml}
      ${tableHtml}

      <section class="takeaway-panel">
        <h3>この章の到達点</h3>
        <ul>${chapter.keyTakeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    `;

    
  }

  function renderGlossaryPreview(chapter) {
    const terms = glossary.filter((term) => term.chapterIds.includes(chapter.id)).slice(0, 8);
    el.glossaryPreview.innerHTML = terms.map((term) => `
      <button class="term-pill" type="button" data-term="${escapeHtml(term.term)}">${escapeHtml(term.term)}</button>
    `).join("");
  }

  function renderGlossary() {
    if (!el.glossaryFilter.dataset.ready) {
      chapters.forEach((chapter) => {
        const option = document.createElement("option");
        option.value = chapter.id;
        option.textContent = `${chapter.id}. ${chapter.title}`;
        el.glossaryFilter.appendChild(option);
      });
      el.glossaryFilter.dataset.ready = "true";
    }

    const filter = el.glossaryFilter.value;
    const query = state.query.trim().toLowerCase();
    const filtered = glossary.filter((term) => {
      const byChapter = filter === "all" || term.chapterIds.includes(filter);
      const byQuery = !query || `${term.term} ${term.definition} ${term.example}`.toLowerCase().includes(query);
      return byChapter && byQuery;
    });

    el.glossaryGrid.innerHTML = filtered.map((term) => `
      <article class="glossary-card">
        <h3>${escapeHtml(term.term)}</h3>
        <p>${escapeHtml(term.definition)}</p>
        <small>${escapeHtml(term.example)}</small>
      </article>
    `).join("");
  }

  function renderQuiz(chapter) {
    const items = quizzes.filter((quiz) => quiz.chapterId === chapter.id);
    if (el.quizTabCount) el.quizTabCount.textContent = items.length;
    el.quizSection.innerHTML = `
      <div class="section-heading-row">
        <div>
          <p class="eyebrow">Certification Practice</p>
          <h2>${chapter.id}. ${escapeHtml(chapter.title)} 確認問題</h2>
        </div>
        <span class="quiz-count">${items.length}問</span>
      </div>
      <div class="quiz-grid">
        ${items.map((quiz, index) => renderQuizCard(quiz, index)).join("")}
      </div>
    `;

    el.quizSection.querySelectorAll(".answer-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const card = button.closest(".quiz-card");
        const answer = card.querySelector(".answer-block");
        const isOpen = answer.hidden === false;
        answer.hidden = isOpen;
        button.textContent = isOpen ? "回答を表示" : "回答を隠す";
      });
    });

    el.quizSection.querySelectorAll(".choice-button").forEach((button) => {
      button.addEventListener("click", () => {
        const group = button.closest(".choice-list");
        if (button.dataset.multi !== "true") {
          group.querySelectorAll(".choice-button").forEach((item) => item.classList.remove("is-selected"));
        }
        button.classList.toggle("is-selected");
      });
    });
  }

  function renderQuizCard(quiz, index) {
    const answerText = quiz.answers.map((answerIndex) => `${String.fromCharCode(65 + answerIndex)}. ${quiz.options[answerIndex]}`).join(" / ");
    return `
      <article class="quiz-card">
        <div class="quiz-meta">
          <span>Q${index + 1}</span>
          <span>${escapeHtml(quiz.type)}</span>
        </div>
        <h3>${escapeHtml(quiz.question)}</h3>
        <div class="choice-list">
          ${quiz.options.map((option, optionIndex) => `
            <button class="choice-button" type="button" data-multi="${quiz.answers.length > 1}">
              <span>${String.fromCharCode(65 + optionIndex)}</span>
              ${escapeHtml(option)}
            </button>
          `).join("")}
        </div>
        <button class="answer-toggle" type="button">回答を表示</button>
        <div class="answer-block" hidden>
          <p><strong>正答:</strong> ${escapeHtml(answerText)}</p>
          <p>${escapeHtml(quiz.explanation)}</p>
        </div>
      </article>
    `;
  }

  function renderSearchResults() {
    const query = state.query.trim().toLowerCase();
    if (!query) {
      el.searchResults.innerHTML = "";
      el.searchResults.classList.remove("is-visible");
      return;
    }

    const chapterHits = chapters.filter((chapter) => {
      const beginnerNote = beginnerNoteByChapter(chapter.id);
      const beginnerNoteContent = beginnerNote ? [beginnerNote.title, beginnerNote.intro, ...beginnerNote.points.flatMap((point) => [point.term, point.explanation]), ...beginnerNote.pitfalls] : [];
      const content = [chapter.title, chapter.subtitle, chapter.summary, ...chapter.objectives, ...chapter.examFocus, ...chapter.keyTakeaways, ...beginnerNoteContent, ...chapter.sections.flatMap((section) => [section.title, ...section.body, ...section.bullets, section.example, section.examTip])].join(" ");
      return content.toLowerCase().includes(query);
    });

    const glossaryHits = glossary.filter((term) => `${term.term} ${term.definition} ${term.example}`.toLowerCase().includes(query)).slice(0, 8);

    el.searchResults.classList.add("is-visible");
    el.searchResults.innerHTML = `
      <div class="search-result-group">
        <h3>章ヒット</h3>
        ${chapterHits.length ? chapterHits.map((chapter) => `<button type="button" data-chapter="${chapter.id}">${chapter.id}. ${escapeHtml(chapter.title)}</button>`).join("") : `<p class="muted-text">該当する章はありません。</p>`}
      </div>
      <div class="search-result-group">
        <h3>用語ヒット</h3>
        ${glossaryHits.length ? glossaryHits.map((term) => `<span>${escapeHtml(term.term)}</span>`).join("") : `<p class="muted-text">該当する用語はありません。</p>`}
      </div>
    `;
    el.searchResults.querySelectorAll("button[data-chapter]").forEach((button) => {
      button.addEventListener("click", () => setChapter(button.dataset.chapter));
    });
  }

  function render() {
    const chapter = chapterById(state.currentChapter);
    renderChapterNav();
    renderProgress();
    renderLesson(chapter);
    renderGlossaryPreview(chapter);
    renderQuiz(chapter);
    renderGlossary();
    renderSearchResults();
    const index = currentIndex();
    el.prev.disabled = index <= 0;
    el.next.disabled = index >= chapters.length - 1;
  }

  el.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderSearchResults();
    renderGlossary();
  });

  el.glossaryFilter.addEventListener("change", renderGlossary);

  el.markComplete.addEventListener("click", () => {
    if (state.completed.has(state.currentChapter)) {
      state.completed.delete(state.currentChapter);
    } else {
      state.completed.add(state.currentChapter);
    }
    saveCompleted();
    render();
  });

  el.prev.addEventListener("click", () => {
    const index = currentIndex();
    if (index > 0) setChapter(chapters[index - 1].id);
  });

  el.next.addEventListener("click", () => {
    const index = currentIndex();
    if (index < chapters.length - 1) setChapter(chapters[index + 1].id);
  });

  document.addEventListener("click", (event) => {
    const termButton = event.target.closest("button[data-term]");
    if (!termButton) return;
    el.search.value = termButton.dataset.term;
    state.query = termButton.dataset.term;
    el.glossaryFilter.value = "all";
    renderGlossary();
    renderSearchResults();
    if (typeof switchTab === "function") switchTab("glossary");
    document.getElementById("tab-glossary").scrollIntoView({ behavior: "smooth" });
  });

  function switchTab(tabId) {
    el.tabBtns.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.tab === tabId);
    });
    el.tabContents.forEach((content) => {
      content.classList.toggle("is-active", content.id === `tab-${tabId}`);
    });
  }

  if(el.tabBtns) {
    el.tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
  }

  render();
})();