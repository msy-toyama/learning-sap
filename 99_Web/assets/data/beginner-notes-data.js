window.beginnerNotesData = [
  {
    chapterId: "01",
    title: "S/4HANAを学ぶ前提を先にそろえる",
    intro: "原文では、S/4HANAの機能説明に入る前に、デジタル化で企業データが増え、分析を待つ余裕がなくなった背景を説明しています。COを学ぶときも、なぜリアルタイム分析やFioriが重要なのかを先に押さえると理解が安定します。",
    points: [
      { term: "OLTPとOLAP", explanation: "OLTPは日々の取引入力、OLAPは分析処理です。従来は別システムに分けがちでしたが、HANAは同じデータで両方を扱う方向に寄せています。" },
      { term: "HTAP", explanation: "取引と分析を同じ基盤で処理する考え方です。Cost Center実績を転記直後に分析できる理由の土台になります。" },
      { term: "導入形態", explanation: "CloudでもOn-Premiseでも、データモデル、UX、コードラインの一貫性が重視されます。試験では機能そのものだけでなく、この一貫性も問われます。" },
      { term: "Financeの価値", explanation: "Instant insight-to-action、Accelerated close、照合負荷の低減がキーワードです。月末まで待たずに問題を見つける発想がS/4HANA Financeの中心です。" }
    ],
    pitfalls: [
      "HANAは単に速いデータベースではなく、取引と分析の分断を減らすための基盤として理解します。",
      "RPA、Machine Learning、Conversational AI、IoTはCOの直接機能ではありませんが、デジタル化によりERPに求められる即時性を説明する背景です。"
    ]
  },
  {
    chapterId: "02",
    title: "組織単位と勘定の関係を線でつなぐ",
    intro: "管理会計のマスタは名称が似ているため、最初に何を管理する単位なのかを切り分けることが大切です。原文では、Operating Concern、Controlling Area、Company Code、Profit Center、Plantをそれぞれ別の目的で説明しています。",
    points: [
      { term: "Operational Chart of Accounts", explanation: "複数Company Codeを同じControlling Areaに割り当てるときの重要条件です。内部配賦を同じ会計ルールで扱うため、運用勘定コード表をそろえる必要があります。" },
      { term: "Profit Center", explanation: "組織を利益責任の視点で見る単位です。COの転記では統計的に扱われる文脈があり、Cost CenterやInternal Orderの実転記とは役割が違います。" },
      { term: "Cost Element Category", explanation: "S/4HANAでは費用もG/L Accountとして管理しますが、その中でPrimary、Secondary、Internal Activity Allocationなどの性質をカテゴリで区別します。" },
      { term: "Fiori Reportingの階層", explanation: "従来のCost Center GroupをそのままFioriレポートで使えるとは限りません。Global HierarchyやReport RelevantなRuntime Hierarchyとの関係を意識します。" }
    ],
    pitfalls: [
      "Controlling Areaは内部配賦の境界、Company Codeは外部報告の単位です。名前の近さで混同しないようにします。",
      "Cost Center標準階層は必須ですが、Internal Order Groupには同じ意味の必須標準階層はありません。"
    ]
  },
  {
    chapterId: "03",
    title: "転記の入口でRealとStatisticalを決める",
    intro: "イベントベース転記では、FIやMMで発生した業務イベントがCOへ流れます。原文では、FI文書と並行してCO文書が作られること、Real postingは一つだけであること、Embedded Analyticsで明細を確認できることが強調されています。",
    points: [
      { term: "FI文書とCO文書", explanation: "FI側の会計文書と、COレポート用の管理会計文書は関連を持ちます。Line item repostingでは元FI文書への追跡性が残る点が重要です。" },
      { term: "Real CO object", explanation: "一つの明細に対して実際に配賦・決済できるCOオブジェクトは一つだけです。追加指定は分析用のStatistical postingになります。" },
      { term: "Direct Activity Allocation", explanation: "Activity Type category 1のような手入力・手動配賦の活動タイプを使い、送信Cost Centerを貸方、受信Real CO objectを借方にします。" },
      { term: "Embedded Analytics", explanation: "ABAP CDS Viewをもとに、ACDOCAなどの実績明細を複製せずに分析する考え方です。転記後すぐに見る、というS/4HANAらしさにつながります。" }
    ],
    pitfalls: [
      "Manual repostingは送信側残高チェックが弱いため、送信Cost Centerがマイナスになる可能性があります。",
      "Validationはチェック、Substitutionは置換です。矛盾した場合はValidationが優先します。"
    ]
  },
  {
    chapterId: "04",
    title: "期末処理は費用を管理しやすい形に整える作業",
    intro: "Cost Center期末処理は、月中に集めた費用を経営管理で使いやすい形へ整えるプロセスです。原文ではAccrual、SKF、配賦、Period Lockまでを一連の締め処理として扱います。",
    points: [
      { term: "Imputed costとAccrual", explanation: "FIの費用発生タイミングと、COで管理したい期間配分がずれる場合に、管理会計上の費用をならします。" },
      { term: "Manual Cost Allocation", explanation: "単純な付替や修正に使います。Customizingを多く作らずに済みますが、定型的な配賦はCycle化したほうが管理しやすくなります。" },
      { term: "Indirect Activity Allocation", explanation: "直接活動配賦と違い、活動数量を受信側や基準値から自動的に求めて実績配賦する考え方です。Manage Allocationsだけでは設定できない点に注意します。" },
      { term: "Iteration", explanation: "相互に配賦し合うCost Centerがあると一度では送信側が完全にクレジットされません。反復処理で残額を小さくしていきます。" }
    ],
    pitfalls: [
      "DistributionはPrimary costを元勘定のまま移し、Assessment/Overhead AllocationはSecondary costにまとめます。",
      "Period Lockは期間全体だけでなく、取引タイプ単位でも締め後の処理を制御できます。"
    ]
  },
  {
    chapterId: "05",
    title: "Internal Orderは一時的・個別的な費用を見る補助線",
    intro: "原文ではInternal Orderを、Cost Centerだけでは見えない施策・イベント・投資・発生費用を細かく見るための最も詳細な運用レベルとして説明しています。Order Type、Model Order、Status、Order Groupをつなげて理解します。",
    points: [
      { term: "Overhead Order", explanation: "展示会や修理など、最終的にCost Centerへ決済する内部活動を監視するOrderです。" },
      { term: "Investment Order", explanation: "資産取得や建設に関係する費用を集め、最終的に固定資産へ決済するOrderです。" },
      { term: "Accrual Order", explanation: "Accrual calculationのCreditを受けるためのOrderです。原文ではOrder category 02が必要と説明されています。" },
      { term: "Model Order", explanation: "新規Order作成時のテンプレートです。Order Typeに割り当てると、組織割当や決済などの初期値を流し込めます。" }
    ],
    pitfalls: [
      "Real Orderは費用を実際に集めて決済できますが、Statistical Orderは分析用で決済やOverhead適用ができません。",
      "Statusは表示ラベルではなく、実績転記や決済などのBusiness Transactionを許可・警告・禁止する制御です。"
    ]
  },
  {
    chapterId: "06",
    title: "Orderの実績とCommitmentを分けて読む",
    intro: "Internal Orderでは、実績費用だけでなく、まだ請求されていない将来費用であるCommitmentも重要です。原文では、PR/PO、Funds Commitment、年末繰越、Value Typeによる由来識別が説明されています。",
    points: [
      { term: "Purchase Requisition", explanation: "社内の購買要求です。Orderを割り当てると、まだ発注前でも将来費用としてCommitmentを作れます。" },
      { term: "Purchase Order", explanation: "サプライヤへの発注です。PRより契約性が高く、予算残を見るうえで強いCommitmentとして扱います。" },
      { term: "Funds Commitment", explanation: "MMを使わない場合など、購買前でも発生が見込まれる費用を手動で予約する仕組みです。" },
      { term: "Commitment Carryforward", explanation: "年度末に未消化のOpen commitmentを翌年度第1期間へ繰り越せます。実績ではなく、将来費用の予約を翌年度へ移す処理です。" }
    ],
    pitfalls: [
      "Commitment updateは将来費用を記録すること、Availability checkは予算と比べて警告・エラーを出すことです。",
      "GRやInvoiceで実績が発生すると、Commitmentは減少し実績費用へ置き換わっていきます。"
    ]
  },
  {
    chapterId: "07",
    title: "SettlementはOrder費用の最終負担先を決める処理",
    intro: "原文では、Internal Orderの期末処理をPeriodic DebitとPeriodic Creditに分けています。Debit側ではOverheadや活動再評価、Credit側ではSettlementやPeriodic Repostingを扱います。",
    points: [
      { term: "Basic settlement", explanation: "100%を一つのCost CenterまたはG/L Accountへ決済するシンプルな方法です。" },
      { term: "Extended settlement", explanation: "複数受信先、割合、金額、Equivalence Numberなどで分割できます。Settlement Ruleが中心になります。" },
      { term: "Equivalence Number", explanation: "受信先ごとの重みで配賦比率を決めます。例えばA=2、B=3なら、費用は2:3の比率で決済されます。" },
      { term: "Settlement hierarchy", explanation: "階層Orderでは下位から上位へ処理します。原文では階層番号の大きい下位Orderから小さい上位Orderへ進む流れが示されています。" }
    ],
    pitfalls: [
      "Allocation Structureは勘定の写し方、Source Structureは費用種類別の受信先分岐、PA Transfer StructureはCO-PAへの橋渡しです。",
      "Settlementは常に必須ではありません。Orderを分析目的で残すケースもあります。"
    ]
  },
  {
    chapterId: "08",
    title: "Planningは見通し、Budgetは承認枠",
    intro: "Planning章では、ACDOCP、BPC Optimized、SAC、旧COテーブルの関係を整理します。原文ではLive Connection、Import/Export、Retraction、Internal Order Planningの前提が説明されています。",
    points: [
      { term: "CategoryとVersion", explanation: "ACDOCPでは計画データをCategoryで区別します。旧COテーブルや実績参照ではVersion 000などの考え方が残るため、両者の対応を意識します。" },
      { term: "Live Connection", explanation: "SACからS/4HANA上のデータをリアルタイム分析し、データをクラウドへ複製しない接続方式です。" },
      { term: "ExportのFull update", explanation: "SACからS/4HANAへTransaction Dataを戻すときはFull updateになるため、頻繁に実行するとリソース消費が増えます。" },
      { term: "Retraction", explanation: "ACDOCPに入った計画を旧COテーブルへ戻す処理です。KP26など旧来の処理と連携するときに必要になります。" }
    ],
    pitfalls: [
      "Overall PlanningにはPlanning Profileが必要です。Planner Profileではない点に注意します。",
      "Integrated PlanningはVersion側の指標とOrder Master側の指標がそろって初めてCost CenterやBusiness Processへ連動します。"
    ]
  },
  {
    chapterId: "09",
    title: "Budget Availability Controlは支出を止めるための設計",
    intro: "Budgetingは、承認された枠をActualやCommitmentと比較し、WarningやErrorで業務を制御する仕組みです。原文では年次予算、Account Group、CSV Import、Budget Consistency Checkが詳しく扱われます。",
    points: [
      { term: "Budget Consistency Check", explanation: "予算入力時やCost Center master変更時に、すでに発生した実績に対して予算が不足しないかを確認します。" },
      { term: "Account Group", explanation: "Budget Availability Controlでチェック対象にする費用勘定のグループです。Manage Global Hierarchiesで定義し、Profileへ割り当てます。" },
      { term: "Posting period 1", explanation: "Cost Center Budgetは年次予算ですが、CSVには期間が必要です。原文ではレポート表示のずれを避けるためperiod 1が推奨されています。" },
      { term: "Budget-bearing Cost Center", explanation: "複数Cost Centerの予算消費を一つの上位Cost Centerの予算で見る設計です。同じCompany Code内で指定します。" }
    ],
    pitfalls: [
      "Warningは転記を許可し、Errorは転記を止めます。メッセージの強さが業務統制の強さです。",
      "Cost Center Budgetは月次リリース型の可用性チェックではなく、年次予算として扱います。"
    ]
  },
  {
    chapterId: "10",
    title: "新Commitmentは予測仕訳としてLedgerを分けて読む",
    intro: "新Commitment Managementは、将来費用を旧テーブルだけでなくExtension Ledger上の会計明細として扱う点が特徴です。原文では、Classicとの違い、制約、PO/GR時のPredictive Accounting document、GR/IR設定が重要論点です。",
    points: [
      { term: "Underlying Ledger", explanation: "Extension Ledgerが土台として参照する実績Ledgerです。実績はLeading Ledger側、予測やCommitmentはExtension Ledger側に分けて読みます。" },
      { term: "Extension Ledger Type P", explanation: "予測やCommitment向けのLine itemタイプです。削除ではなく反転で扱うため、予測値の履歴を追いやすくします。" },
      { term: "PO保存時の予測仕訳", explanation: "将来の材料消費やGR/IRをExtension Ledgerに記録します。GR時には予測をReverseし、実績をLeading Ledgerへ記録します。" },
      { term: "新方式の制約", explanation: "Cost CenterとWBSが中心で、Manual commitmentやCommitment carryforwardはサポートされません。Down paymentやFreight costにも制約があります。" }
    ],
    pitfalls: [
      "新CommitmentはACDOCAベースですが、Actualではありません。Ledgerが違うことを必ず意識します。",
      "旧Commitment tableも並行更新されるため、従来レポートやBudget Managementとの関係が残ります。"
    ]
  }
];