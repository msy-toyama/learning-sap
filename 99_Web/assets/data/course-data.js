window.courseData = [
  {
    id: "01",
    title: "SAP S/4HANA 全体像",
    subtitle: "HANA、Universal Journal、FioriをCO学習の土台としてつかむ",
    folder: "01_Overview",
    summary: "SAP S/4HANAは、取引処理と分析を同じデータ基盤で扱うERPです。Cost Center AccountingやInternal Order Accountingを学ぶ前に、ACDOCA、リアルタイム処理、Fioriの役割を押さえると後続章が読みやすくなります。",
    objectives: ["デジタル化でERPに求められる変化を説明できる", "SAP HANAとS/4HANAの関係を説明できる", "Universal JournalがFI/CO統合にもたらす意味を説明できる", "SAP Fioriのアプリ分類とLaunchpadの役割を説明できる"],
    examFocus: ["HANAがOLTPとOLAPを同一基盤で扱える点", "ACDOCAによりFI/COの明細が一元化される点", "Fioriがロールベースの業務アプリとして提供される点"],
    sections: [
      {
        title: "S/4HANAをCOの視点で見る",
        body: ["このコースで扱うCost CenterやInternal Orderは、単独の機能ではなくS/4HANA Financeの統合データモデル上で動きます。費用が転記されると、FIの会計文書とCOの管理会計情報が同じ明細レベルで扱われ、レポートや配賦、決済で同じデータを利用できます。", "学習上のコツは、S/4HANAを「入力した取引が後から集計されるシステム」ではなく、「入力時点から分析できるシステム」と見ることです。Cost Center Plan/ActualやFioriレポートが即時に使える背景には、この統合があります。"],
        bullets: ["取引データと分析データの分断を減らす", "明細レベルでFIとCOの整合性を保つ", "リアルタイムな意思決定を支える"],
        example: "例えば外部サービス費を原価センタに転記すると、FIでは費用計上、COでは原価センタ実績として同時に参照できます。月末に別システムへ転送してから分析する発想とは違います。",
        examTip: "Universal Journalは「複数アプリケーションの明細を一つに寄せる」点が問われやすいです。単なるレポートテーブルではありません。"
      },
      {
        title: "SAP HANAとHTAP",
        body: ["SAP HANAはインメモリ処理により、取引処理と分析処理を同じデータで扱えるようにします。従来のOLTPとOLAPを分け、夜間バッチで分析基盤へ転送する方式では、分析に遅れや重複が生じます。", "HANAでは明細データを直接参照し、必要な粒度で集計できます。COで言えば、転記直後の費用、活動配賦、予算消費、コミットメントを業務ユーザーがすぐ確認できる土台になります。"],
        bullets: ["インメモリで読み込み待ちを減らす", "大量明細をリアルタイムに集計する", "データ複製や照合作業を少なくする"],
        example: "経理担当が月中にCost Centerの実績超過を確認し、その場で購買依頼や内部活動の原因まで掘り下げる、という使い方がしやすくなります。",
        examTip: "HTAPはHybrid Transaction/Analytical Processingの考え方です。取引と分析の両方を同じ基盤で処理する点を押さえます。"
      },
      {
        title: "Fioriは業務の入口",
        body: ["SAP Fioriは、ユーザーのロールに応じて業務アプリを提供するUXです。Launchpadはアプリの入口で、タイルやカタログ、グループ、個人設定を通じて利用者が必要な業務へ入ります。", "CO学習では、設定や実行の名前だけでなく、どの業務をFioriアプリで行い、どの業務がSAP GUIやHTMLトランザクションに残るのかを区別すると実務で迷いにくくなります。"],
        bullets: ["Transactional appsは入力や処理を支援する", "Analytical appsは状況把握からアクションにつなげる", "FactsheetsやSearchは関連オブジェクトの探索を支援する"],
        example: "Cost Center Budget Reportは予算・実績・コミットメントを見ながら原因を追う画面です。単に一覧を見るだけでなく、差異を見つけて明細へ進む使い方が重要です。",
        examTip: "Fioriは見た目の話だけではなく、ロールベース、タスク単位、Launchpadを通じた単一入口という観点で理解します。"
      }
    ],
    tables: [
      { title: "S/4HANA Financeで押さえる基礎", columns: ["要素", "役割", "CO学習での意味"], rows: [["SAP HANA", "高速なインメモリDB", "実績・計画・分析を明細で扱いやすくする"], ["ACDOCA", "Universal Journalの中心明細", "FIとCOの明細統合を支える"], ["ACDOCP", "計画データの主要テーブル", "PlanningやBudgetの学習で頻出"], ["SAP Fiori", "ロールベースの業務UI", "設定、処理、分析アプリの入口になる"]] }
    ],
    flow: { title: "CO学習の入口", steps: ["業務イベントが発生", "FI/COの明細が統合データに記録", "原価センタ・指図などのCOオブジェクトへ割当", "Fiori/Embedded Analyticsで即時分析", "期末処理・配賦・決済で管理会計目的に整える"] },
    keyTakeaways: ["S/4HANAではFIとCOのデータ整合性が設計で高まっている", "Universal Journalを理解すると後続の転記・配賦・決済がつながる", "Fioriは試験でも実務でも業務導線として重要"]
  },
  {
    id: "02",
    title: "組織単位とマスタデータ",
    subtitle: "Controlling Area、Cost Center、Activity Type、SKFを整理する",
    folder: "02_Organizationnal Units and Master Data",
    summary: "管理会計は、費用をどの組織・責任範囲・活動に結びつけるかを決める仕組みです。Controlling Area、Company Code、Operating Concernの関係と、Cost Center、Activity Type、Statistical Key Figureなどのマスタを理解することが土台になります。",
    objectives: ["管理会計の主要コンポーネントを説明できる", "Controlling AreaとCompany Codeの割当を説明できる", "Cost Center標準階層とカテゴリを説明できる", "Primary/Secondary Cost G/L Account、Activity Type、SKFを区別できる", "マスタデータグループとFiori Reportingでの扱いを説明できる"],
    examFocus: ["Controlling Area内でのみ内部配賦が行われる", "複数Company Codeを一つのControlling Areaへ割当てる条件", "Primary costsとSecondary costsがS/4HANAではG/L accountとして管理される", "Fixed valueとTotals valueのSKF差分"],
    sections: [
      {
        title: "管理会計の対象を決める組織単位",
        body: ["Management Accountingは、経営管理のために費用・収益・活動量をどの単位で見るかを定義します。Controlling Areaは内部管理会計の閉じた単位で、Cost CenterやInternal Orderの配賦はこの範囲内で行われます。", "Company Codeは外部報告の最小単位、Operating ConcernはCO-PAの市場セグメント分析の単位です。FIとCOの組織単位を同時に設計し、割当関係を正しく作ることが重要です。"],
        bullets: ["1:1割当はFIとCOの視点が同じ場合にシンプル", "1:n割当はクロスカンパニー管理や配賦が必要な場合に使う", "Company Codeを同じControlling Areaに入れるには運用勘定コード表が同じ必要がある"],
        example: "国内の複数法人で同じ工場ネットワークを使い、部門間活動配賦を法人横断で見たい場合、一つのControlling Areaに複数Company Codeを割り当てる検討が出ます。",
        examTip: "Controlling Areaは原価計算の閉じた単位です。Company Codeと同じではなく、割当設計で1:1にも1:nにもできます。"
      },
      {
        title: "Cost Centerと標準階層",
        body: ["Cost Centerは費用が発生し、責任者が管理する場所です。すべてのCost CenterはControlling Areaの標準階層に割り当てる必要があります。標準階層は組織図そのものではなく、管理・責任・レポートのための構造です。", "Cost Center Categoryは、管理部門、製造部門、販売部門などの属性を表し、許可される活動タイプやロック指標、数量管理などに影響します。誤った部門に不適切な活動を投稿しないための制御にも使えます。"],
        bullets: ["標準階層はControlling Area作成時に指定する", "Cost Centerは責任単位・機能・場所・配賦基準で設計できる", "標準階層への割当は非時間依存で、履歴レポートにも現在構造が影響する"],
        example: "IT部門をCost Centerとして作り、ヘルプデスク時間をActivity Typeとして他部門へ配賦する設計にすると、ITコストを利用部門へ説明しやすくなります。",
        examTip: "Cost Center標準階層は特別なCost Center Groupです。代替階層やGlobal Hierarchyとの違いも意識します。"
      },
      {
        title: "Primary costs、Secondary costs、Activity Type",
        body: ["SAP S/4HANAでは、外部取引に由来するPrimary costsも、CO内部の価値フローを表すSecondary costsもG/L Accountとして管理されます。Primary costsは請求書や購買、給与など外部・統合プロセスから来る費用です。Secondary costsは配賦、活動配賦、決済などCO内部の流れを表します。", "Activity TypeはCost Centerが提供する活動の種類です。直接活動配賦では、送信Cost Center、受信オブジェクト、Activity Type、数量を入力し、計画価格などで評価して送信側を貸方、受信側を借方にします。"],
        bullets: ["Primary Costs or Revenueは外部・統合プロセスの費用収益を表す", "Secondary Costsは内部配賦や決済などに使う", "Activity Typeには利用できるCost Center Categoryや活動タイプカテゴリを設定できる"],
        example: "研修部門が他部門へ研修時間を提供する場合、Activity TypeをTraining Hourとして作り、時間数に価格を掛けて受講部門へ費用を配賦できます。",
        examTip: "試験では、活動配賦に使う勘定がSecondary CostのG/L Accountである点がよく問われます。"
      },
      {
        title: "Statistical Key Figureとグループ",
        body: ["Statistical Key Figureは、配賦や分析の基準に使う数量・値です。従業員数、電話使用数、床面積などが典型例です。Fixed valueは一度入力すると同年度の後続期間へ引き継がれ、Totals valueは入力期間だけに意味を持ちます。", "マスタデータグループは、Cost Center、Cost Element、Activity Type、SKFなどを分析・計画・配賦のためにまとめる機能です。Fiori Reportingでは、従来グループをGlobal Hierarchyへ変換・複製・Report Relevantにするなどの扱いが必要になる場合があります。"],
        bullets: ["Fixed valueは従業員数など継続的な値に向く", "Totals valueは通話回数など期間ごとに変わる値に向く", "選択バリアント付きグループは動的だが、性能面の注意がある"],
        example: "電話費用を各部門の通話回数で配賦するなら、通話回数をTotals valueのSKFとして入力し、期末配賦のトレースファクタにします。",
        examTip: "FixedとTotalsの違いは定番です。後続期間へ引き継がれるかどうかで覚えます。"
      }
    ],
    tables: [
      { title: "組織単位の比較", columns: ["組織単位", "主な用途", "試験での着眼点"], rows: [["Operating Concern", "CO-PAの市場セグメント分析", "複数Controlling Areaをまとめられる"], ["Controlling Area", "内部管理会計の閉じた単位", "内部配賦はこの範囲内"], ["Company Code", "外部会計・法定報告", "独立した会計単位"], ["Profit Center", "管理志向の損益分析", "COでは統計的に扱われる文脈がある"], ["Plant", "ロジスティクス単位", "Company Code経由でCOへ関係する"]] },
      { title: "マスタデータの使い分け", columns: ["マスタ", "何を表すか", "使う場面"], rows: [["Cost Center", "費用発生と責任の場所", "実績転記、計画、配賦、予算管理"], ["Activity Type", "Cost Centerが提供する活動", "直接・間接活動配賦"], ["Statistical Key Figure", "配賦や分析の基準値", "Distribution/Assessmentの配賦基準"], ["Cost Center Group", "Cost Centerの集合", "計画、レポート、配賦対象選択"]] }
    ],
    flow: { title: "組織・マスタ設計の順序", steps: ["Controlling AreaとCompany Codeの関係を決める", "標準階層を作る", "Cost Center CategoryとCost Centerを整備", "G/L Accountの費用属性を整備", "Activity TypeとSKFを作り、配賦・計画に使う"] },
    keyTakeaways: ["Controlling Areaは内部配賦の境界", "Cost Center標準階層は全Cost Center必須の構造", "Primary/Secondary costsはS/4HANAではG/L Accountとして扱われる", "SKFは期末配賦の基準として非常に重要"]
  },
  {
    id: "03",
    title: "イベントベース転記",
    subtitle: "Primary Posting、Real/Statistical Posting、修正処理を理解する",
    folder: "03_Event-Based Postings",
    summary: "イベントベース転記では、FI、MM、COなどの業務イベントが発生したタイミングでCost CenterやInternal Orderへ費用が割り当てられます。Real postingとStatistical postingの判断、デフォルト勘定割当、Validation/Substitution、Reposting、直接活動配賦が中心論点です。",
    objectives: ["CO文書番号範囲を説明できる", "Primary postingの発生元とACDOCA連携を説明できる", "Real postingとStatistical postingを区別できる", "ValidationとSubstitutionの違いを説明できる", "Manual reposting、Line item reposting、Direct activity allocationを区別できる"],
    examFocus: ["一つの明細行にはReal CO objectは一つだけ", "Profit CenterへのCO転記は統計的", "ValidationはSubstitutionより強い", "Line item repostingは元FI文書参照を保持する", "Direct activity allocationはSecondary Cost category 43を使う"],
    sections: [
      {
        title: "Primary postingの基本",
        body: ["Primary costsは、FIの請求書、MMの入出庫、その他統合アプリケーションから発生します。S/4HANAではFI文書と関連するCO情報がACDOCAに明細として保存され、COレポートで即時に利用できます。", "CO文書を発生させる取引には番号範囲が必要です。実績取引と計画取引で異なる番号範囲グループを作ると、再編成や管理がしやすくなります。"],
        bullets: ["FIやMMから発生した費用はCOオブジェクトへ割り当てられる", "費用勘定へ転記するにはCost CenterやOrderなどのCO割当が必要", "CO文書番号範囲はBusiness Transactionごとに管理する"],
        example: "外部業者の修理請求書を入力すると、FIでは費用と債務が記録され、COでは修理を負担するCost CenterやInternal Orderに実績が更新されます。",
        examTip: "Primary postingはCOだけで閉じた処理ではなく、FI/MMなどのイベントが起点になる点を押さえます。"
      },
      {
        title: "Real postingとStatistical posting",
        body: ["Management Accountingでは、処理可能な実績をReal posting、情報目的の更新をStatistical postingと呼びます。一つの転記明細に対して、Real CO objectは一つだけです。追加の統計オブジェクトは分析用に更新されます。", "Cost Centerは例外的にRealにもStatisticalにもなり得ます。Real OrderとCost Centerを同じ明細に入れた場合、通常はReal Orderが実転記を受け、Cost Centerは統計転記になります。Statistical Orderの場合は、別のReal objectが必要です。"],
        bullets: ["Real postingは配賦や決済の対象になる", "Statistical postingは情報目的で、通常は処理対象ではない", "Profit CenterはCO視点では統計的な割当として理解する"],
        example: "展示会費用をReal Internal Orderに集め、同時に責任部門のCost Centerも明細に入れると、詳細分析はOrder、部門別確認はCost Centerという見方ができます。",
        examTip: "Real objectを複数持たせることはできません。Real OrderとCost Centerを同時指定した場合の優先関係は頻出です。"
      },
      {
        title: "入力を助ける設定: Default、Validation、Substitution",
        body: ["Default Account Assignmentは、特定のPrimary Cost G/L Accountに対して既定のCost CenterやOrderを自動提案する設定です。自動発生する価格差、為替差、値引きなどでは必須になることがあります。", "Validationは入力値が条件を満たすかを検査し、警告やエラーを出します。Substitutionは条件を満たしたときに値を自動置換します。矛盾した場合はValidationが優先されます。"],
        bullets: ["Defaultは提案値で、アプリケーション側で上書きできる場合がある", "Validationは不正な組み合わせを止める", "Substitutionは入力値を別値へ置き換える"],
        example: "特定の会議費勘定は必ず管理部門Cost Centerへ入れる、というルールはDefaultで補助できます。一方、そのCost Center以外ではエラーにしたいならValidationです。",
        examTip: "Validationはチェック、Substitutionは置換。Validationのほうが強い、という短い関係で覚えると迷いません。"
      },
      {
        title: "修正転記と直接活動配賦",
        body: ["Manual repostingはPrimary costsやrevenuesを手動で付け替える処理です。ただし送信側に実際に費用があるかのチェックは行われないため、送信Cost Centerにマイナスが出る可能性があります。", "Line item repostingはCO文書の特定明細を元FI文書参照付きで修正します。Direct activity allocationは、送信Cost Centerが提供した活動数量を入力し、Activity Typeの価格で受信オブジェクトへ配賦する処理です。"],
        bullets: ["Line item repostingは元FI文書への追跡性がある", "Direct activity allocationの送信側はCost Center", "活動配賦では送信側貸方、受信側借方になる"],
        example: "IT部門が営業部門へ10時間のサポートを提供したら、IT Cost Centerを送信側、営業Cost Centerを受信側、Activity TypeをIT Support Hourとして直接活動配賦します。",
        examTip: "Direct activity allocationの送信側はCost Centerのみ、受信側はReal CO objectです。"
      }
    ],
    tables: [
      { title: "修正・配賦処理の違い", columns: ["処理", "主目的", "重要ポイント"], rows: [["Manual Reposting", "Primary costs/revenuesの付替", "送信側残高チェックなし"], ["Line Item Reposting", "特定明細の修正", "元FI文書参照を保持"], ["Direct Activity Allocation", "活動数量の配賦", "Activity Typeと価格で評価"], ["Validation", "不正入力の防止", "条件未達なら警告/エラー"], ["Substitution", "値の自動置換", "Validationが優先"]] }
    ],
    flow: { title: "Primary postingの流れ", steps: ["FI/MMなどで業務イベント発生", "Primary Cost G/L Accountへ転記", "Real CO objectを一つ決定", "必要に応じて統計オブジェクトを更新", "ACDOCA/Embedded Analyticsで照会"] },
    keyTakeaways: ["一明細一Real objectが原則", "Statistical postingは情報目的", "Validation/Substitutionは入力品質を上げる設定", "修正処理は追跡性の違いで使い分ける"]
  },
  {
    id: "04",
    title: "Cost Center期末処理",
    subtitle: "Accrual、SKF、Distribution、Overhead Allocation、Period Lock",
    folder: "04_Period-End Closing",
    summary: "Cost Centerの期末処理では、月中に集めた費用を経営管理に使える形へ整えます。Accrualで不規則費用を平準化し、Statistical Key Figureを配賦基準にし、DistributionやOverhead Allocationで費用を責任部門へ移します。最後にPeriod Lockで締め後の転記を管理します。",
    objectives: ["Accrual calculationの目的と方法を説明できる", "Percentage methodとTarget=Actual methodを区別できる", "SKFを配賦基準として使える", "DistributionとOverhead Allocationを比較できる", "Cycle、Segment、Sender/Receiver rule、Iterationを説明できる", "Period Lockの目的を説明できる"],
    examFocus: ["DistributionはPrimary costsを元勘定のまま配賦", "Overhead AllocationはPrimary/Secondary costsをSecondary cost elementにまとめる", "CycleとSegmentの関係", "Segment reversal/rebookingは過去期間修正を現在期間に反映", "Period Lockは取引タイプ単位でもロックできる"],
    sections: [
      {
        title: "Accrualで費用の波をならす",
        body: ["費用はFIでは発生タイミングで認識されますが、管理会計では期間ごとの活動実態に合わせて見たいことがあります。Accrual calculationは、賞与や保険料のような不定期費用を関連期間に配分し、Cost Centerの月次比較を安定させます。", "Percentage methodは実績費用に割合をかけて発生額を計算します。Target=Actual methodは計画値を実績へ移し、活動依存計画なら稼働率を考慮できます。"],
        bullets: ["Valuation differenceは対応する費用との差額", "Additional costはFI費用がない管理会計上の費用", "Accrual Engineで周期的な転記を自動生成できる"],
        example: "年1回支払う保険料をその月だけに載せるとCost Centerの実績が跳ねます。管理会計では12か月へならして、部門コストの傾向を見やすくします。",
        examTip: "Percentage methodは基準Cost ElementとOverhead rate、Credit objectがセットです。"
      },
      {
        title: "SKFは配賦のものさし",
        body: ["Statistical Key Figureは、電話台数、通話回数、従業員数、床面積など、費用を分けるためのものさしです。期末配賦では、送信Cost Centerに集めた費用を受信Cost Centerへ分ける基準として使います。", "Fixed valueは年度内で後続期間へ引き継がれ、Totals valueは入力期間だけで使われます。配賦基準の性質に合わせて選ぶことが重要です。"],
        bullets: ["従業員数や面積はFixed value向き", "電話使用数やコピー枚数はTotals value向き", "活動依存SKFも設定できる"],
        example: "共通の電話費を各部門の通話回数で配賦する場合、電話Cost Centerが送信、各部門Cost Centerが受信、SKFが通話回数になります。",
        examTip: "SKFのカテゴリはマスタ作成時に決まります。配賦実行時に思いつきで性質を変えるものではありません。"
      },
      {
        title: "DistributionとOverhead Allocation",
        body: ["Distributionは、送信Cost Centerから受信Cost CenterやWBSへPrimary costsを配賦し、元のG/L Accountを受信側にも残します。費用の内訳をそのまま追いたい場合に向きます。", "Overhead Allocationは、旧来のAssessmentに相当する考え方で、Primary costsとSecondary costsをSecondary cost elementにまとめて配賦します。受信側では元の費用内訳が見えにくくなりますが、データ量を抑えられます。"],
        bullets: ["DistributionはPrimary costsのみ", "Overhead AllocationはPrimary/Secondary costsを対象にできる", "どちらもCycleとSegmentで送受信関係を定義する"],
        example: "電力費を各部門へ電力使用量で配賦し、受信側で電力費として見たいならDistribution。食堂費のように内訳より総額配賦が重要ならOverhead Allocationが合います。",
        examTip: "元のCost Elementが残るかどうかが最大の見分けどころです。"
      },
      {
        title: "Cycle、Segment、反復、ロック",
        body: ["Segmentは送信元、受信先、対象費用、配賦基準を持つ最小単位です。複数SegmentをまとめたものがCycleです。相互に配賦し合うCost Centerがある場合、Iterationにより送信側が適切にクレジットされるまで処理されます。", "期末後に過去期間の配賦ルール誤りが見つかった場合、Segment reversal and rebookingで現在期間に修正を入れられます。Period LockはControlling Area、年度、Version、期間、取引タイプの組み合わせで転記を止める仕組みです。"],
        bullets: ["依存Cycleは順序が重要", "独立Cycleは条件を満たせば並列処理できる", "Period Lockは締め後の実績・計画取引を制御する"],
        example: "1月から3月の食堂費配賦率が誤っていた場合、4月に過去配賦を逆仕訳し、正しい比率で再配賦して、過去レポートの整合性を保ちます。",
        examTip: "Segment reversalは個別Segmentが対象です。Cycle全体や反復関係を安易に一括修正するものではありません。"
      }
    ],
    tables: [
      { title: "DistributionとOverhead Allocation", columns: ["観点", "Distribution", "Overhead Allocation"], rows: [["対象費用", "Primary costs", "Primary and secondary costs"], ["受信側勘定", "元のG/L Accountを保持", "Secondary cost elementへ集約"], ["情報粒度", "元費用の詳細が残る", "内訳は失われやすい"], ["典型用途", "電力費など内訳を残したい費用", "食堂費など総額配賦で十分な費用"]] }
    ],
    flow: { title: "Cost Center期末処理の流れ", steps: ["不規則費用をAccrualで平準化", "SKFなどの配賦基準を入力", "Distribution/Overhead Allocationを実行", "必要に応じて手動配賦や間接活動配賦", "結果を確認しPeriod Lockで締める"] },
    keyTakeaways: ["Accrualは月次管理の安定化", "配賦はCycleとSegmentで定義", "DistributionとOverhead Allocationは元勘定保持の有無で区別", "Period Lockは締めの統制手段"]
  },
  {
    id: "05",
    title: "Internal Orderマスタ概要",
    subtitle: "Order Type、Real/Statistical Order、Status、Order Group",
    folder: "05_Internal Order Overview of Master Data",
    summary: "Internal Orderは、Cost Centerだけでは見えにくい一時的・個別的な活動費を集めるCOオブジェクトです。展示会、修理、投資、発生費用、収益付き活動などをOrder単位で管理し、必要に応じてCost Center、資産、CO-PAなどへ決済します。",
    objectives: ["Internal Orderの用途を説明できる", "Real OrderとStatistical Orderを区別できる", "Order Typeが制御する項目を説明できる", "System/User Statusで取引を制御できる", "Order GroupとCollective Processingを説明できる"],
    examFocus: ["Internal OrderはOrder Type参照で作成される", "Statistical Orderは決済やOverhead適用ができない", "Statusは許可・警告・禁止を制御する", "Order GroupにはCost Centerの標準階層に相当する必須構造はない", "Order Typeはクライアント全体で有効"],
    sections: [
      {
        title: "Internal Orderを使う理由",
        body: ["Cost Centerは責任部門の費用を見るには適していますが、展示会Aと展示会Bのような個別活動を分けて見るには粗すぎることがあります。Internal Orderを使うと、同じ部門が担当する複数イベントでも、活動別に費用を収集・比較できます。", "Orderに集めた費用は、活動終了後にCost Center、WBS、資産、CO-PAなどへ決済できます。これにより、詳細分析と組織別責任管理を両立できます。"],
        bullets: ["一時的な施策・イベント・修理を個別管理する", "Cost Centerとは違う観点で費用を見る", "決済により最終負担先へ移す"],
        example: "マーケティング部門が東京展示会と大阪展示会を担当する場合、部門Cost Centerだけでは比較できません。展示会ごとにInternal Orderを作ると、会場費、外注費、社内作業を分けて見られます。",
        examTip: "Internal OrderはCost Centerの代替ではなく、Cost Centerを補う詳細管理オブジェクトとして考えます。"
      },
      {
        title: "Real OrderとStatistical Order",
        body: ["Real Orderは費用を実際に収集し、後で複数の受信先へ決済できます。作成時にはCompany Code割当が必要です。", "Statistical Orderは情報目的で使います。費用は別のReal object、例えばCost Centerへ実転記され、Orderには統計的に更新されます。Statistical Orderは決済できず、Overhead rateも適用できません。"],
        bullets: ["Real Orderは費用収集と決済が可能", "Statistical Orderは詳細分析用", "Statistical Orderの転記にはReal cost assignment objectが必要"],
        example: "社内改善活動の費用は部門Cost Centerに実転記しつつ、改善テーマ別にStatistical Orderで分析する、といった使い方ができます。",
        examTip: "Statistical Orderは便利ですが、settlementできない点が重要です。"
      },
      {
        title: "Order TypeとStatus Management",
        body: ["Internal Orderは必ずOrder Typeを参照して作成されます。Order Typeは番号範囲、Commitment Management、収益転記可否、Status Management、Settlement、Planning、Budgetingなどの基本制御を持ちます。Model Orderを参照して標準設定を流し込むこともできます。", "Status ManagementはOrderのライフサイクルを制御します。Created、Released、Technically Complete、ClosedなどのSystem Statusに加え、User Statusで承認済み・未承認など独自の制御を追加できます。"],
        bullets: ["Createdでは実績転記ができないなど、System Statusで取引が制御される", "User Statusは許可・警告・禁止を細かく設定できる", "Status ProfileはOrder Typeへ割り当てる"],
        example: "高額な投資Orderは、User StatusがApprovedになるまでReleasedへ進めないようにすると、予算承認前の実績転記を防げます。",
        examTip: "Status変更自体もBusiness Transactionです。Order Type、Status Profile、User Statusの関係をつなげて覚えます。"
      },
      {
        title: "Order GroupとCollective Processing",
        body: ["Internal Orderも階層的なOrder Groupへまとめられます。計画、決済、Overhead計算、レポートで任意のOrder集合を扱うためです。Cost Centerと違い、すべてのOrderが必ず属する標準階層はありません。", "Collective Processingでは、選択バリアントやOrder Groupを使って複数Orderのマスタ変更、Status更新、決済などをまとめて処理できます。Automatic collective processingではSubstitution ruleを使った一括変更も可能です。"],
        bullets: ["Order Group名はクライアント依存で一意", "Orderは複数グループに属せる", "選択バリアントで動的グループを作れる"],
        example: "全営業イベントOrderを一つのグループにまとめ、月末にまとめて決済することで、個別Orderを一つずつ処理する手間を減らせます。",
        examTip: "Cost Center標準階層とOrder Groupの違いは混同しやすいです。Orderに標準階層必須はありません。"
      }
    ],
    tables: [
      { title: "Real OrderとStatistical Order", columns: ["観点", "Real Order", "Statistical Order"], rows: [["目的", "費用を収集して後で配賦/決済", "情報目的の詳細分析"], ["実転記", "Orderが受ける", "別のReal objectが受ける"], ["決済", "可能", "不可"], ["Overhead", "適用可能", "不可"], ["Cost Center併用", "Cost Centerは統計になり得る", "Cost CenterなどReal objectが必要"]] }
    ],
    flow: { title: "Internal Orderライフサイクル", steps: ["Order Typeを決めて作成", "計画・予算・承認", "Released後に実績/コミットメントを収集", "期末にOverheadやSettlementを実行", "Technically Complete/Closedで終了"] },
    keyTakeaways: ["Internal Orderは個別活動の費用を見える化する", "Order Typeが多くの制御を担う", "Real/Statisticalの違いは転記と決済可否で覚える", "Statusはライフサイクルと業務取引を制御する"]
  },
  {
    id: "06",
    title: "Internal Orderイベントベース転記",
    subtitle: "統合転記、Orderへの実績、コミットメント管理",
    folder: "06_Event-Based Postings for Internal Orders",
    summary: "Internal OrderにもFI、MM、COからイベントベースで費用が転記されます。Real Orderなら費用をOrderに集めて後で決済し、Statistical Orderなら別のReal objectと組み合わせて情報目的で分析します。Commitment Managementでは、購買依頼・購買発注・Funds Commitmentが将来費用として管理されます。",
    objectives: ["Internal Orderへの統合転記を説明できる", "Real/Statistical Orderへの実績転記ロジックを説明できる", "Order commitmentの発生源を説明できる", "Commitment Managementの有効化条件を説明できる", "Commitment carryforwardを説明できる"],
    examFocus: ["Real OrderにCost Centerを併記するとCost Centerは統計転記", "Statistical OrderにはReal objectが必要", "CommitmentはControlling AreaとOrder Typeで有効化が必要", "PR/POやFunds Commitmentがコミットメントを作る", "Open commitmentは年末に翌年度第1期間へ繰越可能"],
    sections: [
      {
        title: "Internal Orderへの実績転記",
        body: ["Internal OrderはCost Centerと同じく、FI、MM、COなど複数アプリケーションから更新されます。外部サービス費や材料出庫などのPrimary costs、Cost Centerからの直接活動配賦によるSecondary costs、分析用のStatistical Key FigureなどがOrderに関係します。", "Real Orderへ実績が入ると、費用はOrderに集まり、必要に応じて後でRepostingやSettlementで他の受信先へ移せます。Order MasterにProfit Centerがある場合は、Profit Centerへ統計的に更新されます。"],
        bullets: ["FIではPrimary Cost/Revenue G/L AccountをOrderへ割当可能", "MMのGoods Receipt/Goods IssueもOrderへPrimary Costを生む", "COではRepostingやDirect Activity AllocationでOrderに費用を入れられる"],
        example: "展示会Orderに外部会場費の請求書、販促物の材料出庫、社内デザインチームの活動時間を集めると、イベントの総コストがOrder単位で見えます。",
        examTip: "Orderへのイベントベース転記はCost Centerと同じ発想ですが、後続のsettlementが重要な違いです。"
      },
      {
        title: "Real/Statistical Orderの転記ロジック",
        body: ["Real Orderに実績を転記する場合、Orderが費用の実体を持ちます。Cost Centerも明細に入れた場合、そのCost Centerは統計的に更新され、費用管理の主役はOrderです。", "Statistical Orderに転記する場合、必ずCost Center、Real Order、Profitability SegmentなどのReal cost assignment objectが必要です。Orderは分析用に更新されるだけです。"],
        bullets: ["Real Orderは費用を管理し、後で決済できる", "Statistical Orderは追加分析軸", "Order masterにCost Centerを持たせて入力を省力化できる"],
        example: "社員研修費を人事Cost Centerに実転記しながら、研修テーマ別Statistical Orderへも記録すれば、部門責任とテーマ別分析を同時にできます。",
        examTip: "Statistical Order単独では転記が完結しません。Real objectが必要です。"
      },
      {
        title: "Commitment Management",
        body: ["Commitmentは、将来発生する見込みの費用です。購買依頼や購買発注でOrderを割り当てると、自動的にコミットメントが作られます。MMを使わない場合などは、Funds Commitmentを手動で入力することもあります。", "Commitment Managementを使うには、Controlling AreaとOrder Typeの両方で有効化し、Order Statusが対象取引を許可している必要があります。実績費用だけでなく、これから使う予定の金額も見ながら予算や計画を管理できる点が価値です。"],
        bullets: ["Purchase Requisitionは内部要求としてコミットメントを作る", "Purchase Orderは契約的な発注としてコミットメントを作る", "Funds Commitmentは購買前の比較的確実な将来費用を予約する"],
        example: "展示会会場を発注した時点でまだ請求書は来ていなくても、Orderにはコミットメントが表示されます。予算残を判断するには実績だけでなくコミットメントも見る必要があります。",
        examTip: "Commitmentはactual costではなくfuture costの予約です。Goods receiptやinvoice receiptで減少して実績に置き換わります。"
      }
    ],
    tables: [
      { title: "Order Commitmentの発生源", columns: ["発生源", "意味", "管理上の見方"], rows: [["Purchase Requisition", "内部要求", "まだ変更しやすい将来費用"], ["Purchase Order", "サプライヤへの発注", "契約性が高い将来費用"], ["Funds Commitment", "手動の資金予約", "購買未登録だが見込まれる費用"]] }
    ],
    flow: { title: "Order CommitmentからActualへ", steps: ["OrderにPR/POを割当", "Commitmentが作成される", "予算・計画との比較に利用", "Goods Receipt/Invoice ReceiptでCommitmentが減る", "Actual costがOrderへ記録される"] },
    keyTakeaways: ["OrderにもFI/MM/COからイベントベース転記される", "Real/Statistical Orderの違いは転記の実体で判断", "Commitmentは将来費用を先取りして管理する", "年末にはOpen commitmentを翌年度へ繰り越せる"]
  },
  {
    id: "07",
    title: "Internal Order期末処理",
    subtitle: "Periodic Debit、Overhead、Settlement、Settlement Structure",
    folder: "07_Period-End Closing of the Internal Orders",
    summary: "Internal Orderの期末処理では、Orderに集めた費用へOverheadを加算したり、Cost Centerや資産、CO-PAなどへSettlementしたりします。Settlement Profile、Allocation Structure、Source Structure、PA Transfer Structure、階層決済の理解が試験対策の中心です。",
    objectives: ["Internal Order settlementの目的を説明できる", "Basic settlementとExtended settlementを区別できる", "Settlement Profileの役割を説明できる", "Allocation/Source/PA Transfer Structureを区別できる", "Periodic/Full settlementと階層決済を説明できる", "Overhead costing sheetの構成を説明できる"],
    examFocus: ["Order settlementは必須ではない", "External settlementはFIも更新する", "Settlement Profileは決済要否と受信先などを制御", "Allocation Structureは元Cost Elementをどう決済Cost Elementへ写すかを制御", "Source Structureは元費用別に異なるSettlement Ruleへ分ける", "Overhead costing sheetはCalculation base、Overhead amount、Credit keyを含む"],
    sections: [
      {
        title: "Order Settlementの考え方",
        body: ["Internal Orderは費用の一時的な集計場所として使われることが多く、活動完了後に最終負担先へ費用を移します。この処理がSettlementです。Cost Center、WBS、Profitability Segmentなどへ移す場合は内部決済、AssetやG/L Accountへ移す場合はFIも更新する外部決済になります。", "Settlementは必須ではありません。Orderを分析目的だけで使うケースや、費用をOrderに残して監視するケースもあります。"],
        bullets: ["Basic settlementは100%を一つのCost CenterまたはG/Lへ", "Extended settlementは複数受信先や配賦ルールを持てる", "Settlement documentとCO documentが作成され、外部決済ではFI documentも作られる"],
        example: "展示会Orderに集めた費用を、終了後に担当部門Cost Centerへ100%決済するならBasicでも足ります。複数事業部へ比率配賦するならExtendedが必要です。",
        examTip: "SettlementとDistribution/Assessmentを混同しないようにします。Orderに集めた費用の最終負担先へ移すのがSettlementです。"
      },
      {
        title: "Settlement ProfileとRule",
        body: ["Settlement ProfileはOrder TypeからOrder masterへ提案される中心設定です。決済が必要か、許可される受信先、配賦方法、文書管理、Settlement StructureやSource Structureなどの初期値を制御します。", "Settlement Ruleでは、どの受信先へ、どの割合・等価数・金額で決済するかを定義します。Periodic settlementは指定期間の費用だけ、Full settlementは指定期間までの累積費用を対象にします。"],
        bullets: ["配賦基準はPercentage、Equivalence Number、Amountのいずれか", "同一RuleにAmountとPercentageなどを混在できない", "有効期間を分ければRule変更ができる"],
        example: "修理Orderの材料費は設備Orderへ、作業費は保全部門Cost Centerへ、と分けたい場合、Source StructureとSettlement Ruleを使って費用種類ごとに受信先を変えます。",
        examTip: "Settlement Profileは決済可能な受信先を制御します。Ruleだけ作っても、Profileで許可されていない受信先には決済できません。"
      },
      {
        title: "Allocation Structure、Source Structure、PA Transfer Structure",
        body: ["Allocation Structureは、Orderに転記されたCost Elementを、元のCost Elementのまま決済するか、決済用Cost Elementへまとめるかを制御します。データ量削減や決済費用の識別に使います。", "Source Structureは、元のCost Elementグループごとに異なるSettlement Ruleを使うための構造です。PA Transfer Structureは、CO-PAへ決済するときにCost ElementをValue Fieldへ対応付けます。"],
        bullets: ["Allocation Structureは決済勘定への写し方", "Source Structureは費用種類別の受信先分岐", "PA Transfer StructureはCO-PAのValue Field対応"],
        example: "材料費は資産へ、旅費はCost Centerへ決済する場合、Source Structureで材料費と旅費を別Source Assignmentに分けます。",
        examTip: "三つのStructureは名前が似ています。何を入力側に見て、どこへつなぐかで整理します。"
      },
      {
        title: "Periodic Debit: OverheadとActivity",
        body: ["Internal Orderには期末にOverheadを加算できます。Overhead Costing SheetはCalculation Base、Overhead Amount、Dependency、Overhead Type、Credit Keyなどで構成され、材料費や労務費を基準に一定率または数量基準でOverheadを計算します。", "OrderはCost Centerからの活動配賦の受信先にもなれます。Actual priceで再評価する場合、Cost Center Accountingとは別トランザクションでRevaluationを行います。"],
        bullets: ["OverheadはActual、Plan、Commitmentを対象にできる", "Credit Keyは相手方のCost CenterやOrderとCost Elementを決める", "Activity Based CostingではProcess TemplateでOrderへ費用を割り当てられる"],
        example: "修理Orderに材料費100万円が直接転記され、保管・購買管理費として5%のOverheadを加算する場合、Costing Sheetで対象勘定と率を定義します。",
        examTip: "Overhead Costing Sheetの三要素、Calculation Base、Overhead Amount、Credit Keyは短答で狙われやすいです。"
      }
    ],
    tables: [
      { title: "Settlement関連構造", columns: ["構造", "役割", "覚え方"], rows: [["Settlement Profile", "決済要否、受信先、文書、初期値を制御", "決済の司令塔"], ["Allocation Structure", "元Cost Elementを決済Cost Elementへどう写すか", "勘定の写し方"], ["Source Structure", "元費用別にRuleを分ける", "費用種類別の分岐"], ["PA Transfer Structure", "CO-PA Value Fieldへ対応付け", "収益性分析への橋渡し"]] }
    ],
    flow: { title: "Order期末処理", steps: ["Orderに実績・活動・コミットメントが集まる", "必要に応じてOverheadを計算", "Settlement Ruleで受信先を決める", "PeriodicまたはFull settlementを実行", "階層Orderは下位から上位へ正しい順序で処理"] },
    keyTakeaways: ["SettlementはOrder費用の最終負担先への移動", "Settlement ProfileとRuleの関係が中心", "三つのStructureを混同しない", "OverheadはOrderへのPeriod-end debit処理"]
  },
  {
    id: "08",
    title: "Planning",
    subtitle: "BPC Optimized、SAC、ACDOCP、Internal Order Planning",
    folder: "08_Planning",
    summary: "Planningでは、Cost CenterやInternal Orderの将来費用、活動量、価格、SKFを計画します。S/4HANAでは計画データの中心がACDOCPであり、BPC Optimized、SAP Analytics Cloud、Analysis for Microsoft Excel、データ転送プログラムが関係します。",
    objectives: ["ACDOCPの役割を説明できる", "BPC OptimizedとSACの位置づけを説明できる", "Cost Center Planningの対象を説明できる", "Internal Order PlanningとBudgetingを区別できる", "Overall planning、Unit costing、Integrated planningを説明できる", "ACDOCPと旧COテーブル間の転送を説明できる"],
    examFocus: ["ACDOCPはFinancial Planningの中心テーブル", "SACはSAPの戦略的Planningツール", "BPC OptimizedはOn-Premiseで継続利用可能だが計画保守期限に注意", "Planは見通し、Budgetは承認された拘束枠", "Internal Order Integrated PlanningにはVersionとOrder Masterの設定が必要"],
    sections: [
      {
        title: "Planningの全体像",
        body: ["Planningは、将来の費用、活動量、価格、収益、SKFを事前に見積もるプロセスです。Cost Center Planningでは、費用計画、活動数量、活動価格、SKFなどを入力し、実績との差異分析や標準原価計算に使います。", "S/4HANAの計画データはACDOCPを中心に扱われます。従来COテーブルとの連携が必要な場合は、転送・リトラクションの仕組みを使います。"],
        bullets: ["Plan/Actual比較により改善アクションを判断する", "活動価格は内部活動の期中評価に使える", "ACDOCPは計画データのSingle source of truthとして機能する"],
        example: "IT部門が来年度のサポート時間と費用を計画し、時間単価を算出して他部門への活動配賦価格に使う、という流れがPlanningの典型です。",
        examTip: "PlanningはBudgetingと違い、必ずしも支出を止める拘束枠ではありません。"
      },
      {
        title: "BPC OptimizedとAnalysis for Microsoft Excel",
        body: ["BPC Optimized for SAP S/4HANAは、S/4HANA上の計画コンテンツとAnalysis for Microsoft Excelワークブックを使って計画データをACDOCPへ保存する仕組みです。Cost CenterやInternal Orderの計画、Activity input/output、価格計画などを扱えます。", "旧COテーブルへ戻す必要がある場合、リトラクション用ワークブックや管理者向けプログラムを使います。例えばActivity outputや価格を旧テーブルへ戻すことで、KP26などの従来処理と連携できます。"],
        bullets: ["計画データはACDOCPへオンライン保存できる", "旧COテーブルとの双方向転送が用意されている", "Activity input/outputやActivity priceのリトラクションが論点"],
        example: "ExcelでCost Center別の活動時間を入力し、ACDOCPへ保存した後、必要に応じて旧COテーブルへ戻して従来の価格計算や確認トランザクションと接続します。",
        examTip: "ACDOCPでは計画はCategoryで扱われ、旧ERPではVersionで扱われる、という違いが出ます。"
      },
      {
        title: "SAP Analytics Cloud Planning",
        body: ["SAP Analytics CloudはBI、予測、Planningを一つのクラウド環境で扱うSAPの戦略的Planningツールです。S/4HANAとはOData APIでマスタ・実績・計画データを連携し、計画結果をS/4HANAへ戻せます。", "Live Connectionではデータをクラウドへ複製せずにリアルタイム分析できます。一方、Financial Planningでは計画モデルへデータをImportし、計画後にACDOCPなどへExportする流れもあります。"],
        bullets: ["SACはStoriesで業務部門が計画画面を作りやすい", "Analytics Designerは高度なアプリ向け", "Integrated Financial Planningの標準Business Contentが提供される"],
        example: "営業計画をSACで作り、製品原価計画やCost Center Planningと連動させ、結果をS/4HANAへ戻してEmbedded AnalyticsでPlan/Actualを見る構成が考えられます。",
        examTip: "SACは単なるレポートではなく、Planning、BI、Predictiveを統合するクラウドツールです。"
      },
      {
        title: "Internal Order Planning",
        body: ["Internal Order Planningでは、Orderのライフサイクル中に発生する見込み費用、活動、業務プロセスを計画します。Budgetが承認された拘束枠であるのに対し、Planは比較・分析・シミュレーションに使う見通しです。", "Overall Planningは最も簡単なOrder計画で、年度別または全体額を概算できます。Primary/Secondary cost planning、Unit Costing、SKF planning、Integrated Planningを組み合わせると、より詳細に計画できます。"],
        bullets: ["Planning ProfileはOrder Typeへ割り当てる", "Unit CostingにはCosting Variantが必要", "Integrated PlanningはVersionとOrder Masterの両方で設定が必要"],
        example: "長期の設備保全Orderでは、年度別の総額、材料別の単価数量、社内作業時間、将来決済まで計画しておくと、実績との差異を深く分析できます。",
        examTip: "Budgetは承認枠、Planは管理上の見通し。Internal Orderの章ではこの違いが強く問われます。"
      }
    ],
    tables: [
      { title: "Planningツールの位置づけ", columns: ["ツール/仕組み", "主な役割", "試験でのポイント"], rows: [["ACDOCP", "計画データの中心テーブル", "Financial PlanningのSingle source"], ["BPC Optimized", "S/4HANA On-Premise向け計画", "Analysis for Excelとリトラクション"], ["SAP Analytics Cloud", "戦略的クラウドPlanning", "OData連携、Business Content"], ["Transfer programs", "旧COテーブルとの変換", "ACDOCP、ACCOSTRATE、COST、COSLの関係"]] },
      { title: "PlanとBudget", columns: ["観点", "Planning", "Budgeting"], rows: [["性質", "見通し・シミュレーション", "承認済みの拘束枠"], ["目的", "差異分析、価格計算、将来管理", "支出統制、可用性管理"], ["Internal Order", "Overall/Cost/Unit/Integrated Planning", "Original、Supplement、Return、Transfer"]] }
    ],
    flow: { title: "SACを使う計画連携", steps: ["S/4HANAから実績・マスタをSACへ取り込む", "SACでCost CenterやOrderを計画", "計画結果をACDOCPへExport", "必要に応じて旧COテーブルへ転送", "Embedded AnalyticsでPlan/Actual比較"] },
    keyTakeaways: ["ACDOCPは計画学習の中心", "SACは戦略的Planningツール", "BPC Optimizedは既存投資を活かす選択肢", "Internal OrderではPlanとBudgetの違いを明確にする"]
  },
  {
    id: "09",
    title: "Budgeting and Availability Control",
    subtitle: "Internal OrderとCost Centerの予算・可用性管理",
    folder: "09_Budgeting and Availability Control",
    summary: "Budgetingは管理者が承認した支出枠を管理する仕組みです。Internal OrderではBudget Profile、Original/Supplement/Return/Current Budget、Availability Controlが中心です。Cost CenterではACDOCPへインポートした予算カテゴリをAvailability Control Profileと結び、ActualやCommitmentの超過をWarning/Errorで制御します。",
    objectives: ["Internal OrderのBudget Profileを説明できる", "Original、Budget updates、Current budgetを区別できる", "Availability ControlのTolerance limitを説明できる", "Cost Center Budget Availability Controlの設定手順を説明できる", "Budget-bearing Cost Centerの考え方を説明できる", "Budget transfer、supplement、returnの条件を説明できる"],
    examFocus: ["Current budget = Original budget + updates", "Availability ControlはActual costsとCommitmentsをBudgetと比較", "Cost Center budgetは年次予算で、期間別Availability Checkではない", "Budget categoryのUsageをCost Center Budgetにする", "Warningは投稿可能、Errorは投稿不可", "Budget transferは同一Company CodeのCost Center間で行う"],
    sections: [
      {
        title: "Internal Order Budgeting",
        body: ["Internal OrderのBudgetは、Orderに対して管理者が承認した費用枠です。Original budgetは初期承認額、SupplementとReturnは予算更新、Current budgetはそれらを反映した現在の予算額です。", "Budget ProfileをOrder Typeへ割り当てることで、予算入力、Availability Control、自動/手動有効化、年次または全体予算チェック、通貨設定などを制御します。"],
        bullets: ["Budget documentには番号範囲04を使う", "予算Line Itemで変更履歴を確認できる", "Original budgetはStatus Managementで凍結できる"],
        example: "展示会Orderに当初100万円のOriginal Budgetを設定し、出展規模拡大で20万円をSupplementすると、Current Budgetは120万円になります。",
        examTip: "Current Budgetは現在使える承認枠です。Plan値と混同しないようにします。"
      },
      {
        title: "Availability Control",
        body: ["Availability Controlは、Actual costsとCommitmentsがBudgetをどの程度消費しているかをチェックします。Tolerance limitにより、5%超過ではWarning、15%超過ではErrorのように段階的な反応を設定できます。", "Warningは通知しつつ転記を許可し、Errorは転記を止めます。Warning with Mailを使う場合はBudget Managerの設定が必要です。"],
        bullets: ["CommitmentもBudget消費として考慮される", "取引タイプごとにToleranceを設定できる", "Availability Control対象外の費用種別も設定できる"],
        example: "予算100万円のOrderで購買発注110万円を作ると、10%超過としてWarningを出すが投稿は許す、という設計ができます。115万円ならErrorで止める設定も可能です。",
        examTip: "Availability Controlは実績だけではなく、Commitmentも見る点が重要です。"
      },
      {
        title: "Cost Center Budget Availability Control",
        body: ["Cost CenterのBudget Availability Controlでは、Plan CategoryをBudgetとして扱うため、Category MaintenanceとBudget Checks for CategoriesでUsageをCost Center Budgetにします。Budget Consistency Checkを有効にすると、すでに実績があるCost Centerへ不足した予算を入れる場合などにエラーを出せます。", "Budget Availability Control Profileでは、対象Account Group、Activity Group、Tolerance limit、Currency Typeを設定し、Budget-relevant Cost Centerへ割り当てます。"],
        bullets: ["Cost Center予算は年次予算で、月次繰越チェックではない", "予算はCompany Code CurrencyまたはGlobal Currencyで比較できる", "既存Profileは削除できず、変更範囲も制限される"],
        example: "部門予算1000万円をACDOCPへImportし、購買発注や実績費用がAccount Groupに該当すると、Available Budgetをその場でチェックします。",
        examTip: "Cost Center budgetのAvailability Checkは年次であり、期間別の予算リリース管理とは異なります。"
      },
      {
        title: "Budget-bearing Cost CenterとTransfer",
        body: ["Budget Availability Checkは、Cost Centerごとに独自予算を持つ形と、Budget-bearing Cost Centerを上位に置き、複数Cost Centerの消費を一つの予算で見る形があります。後者では、下位Cost CenterのマスタにBudget-bearing Cost Centerを登録します。", "Manage Cost Center Budgetsアプリでは、Budget Transfer、Supplement、Returnを実行できます。Transferは同一Company CodeのCost Center間で行い、Availability Controlが有効なら利用可能額を超えるTransferはできません。"],
        bullets: ["Budget-bearing Cost Centerは同じCompany Code内で指定", "Transferには元のBudget Import時と同じAccount Numberが必要", "Cost Center Budget ReportでBudget、Commitment、Actual、Availableを確認"],
        example: "営業本部Cost CenterをBudget-bearing Cost Centerにし、東日本営業・西日本営業の費用も本部予算から消費する形にすると、全体枠で統制できます。",
        examTip: "Budget Transfer、Supplement、Returnは似ています。移動、追加、返却のどれかを業務シナリオで判断します。"
      }
    ],
    tables: [
      { title: "Budget用語", columns: ["用語", "意味", "例"], rows: [["Original Budget", "最初に承認された予算", "展示会予算100万円"], ["Supplement", "追加予算", "会場拡大で20万円追加"], ["Return", "不要予算の返却", "未使用10万円を戻す"], ["Current Budget", "Originalと更新を反映した現在予算", "100 + 20 - 10 = 110万円"], ["Available Budget", "予算から実績・コミットメントを引いた残額", "購買発注後の残予算"]] },
      { title: "WarningとError", columns: ["反応", "転記可否", "使いどころ"], rows: [["Warning", "可能", "超過を知らせるが業務継続を許す"], ["Warning with Mail", "可能", "Budget Managerへ通知する"], ["Error", "不可", "一定超過で支出を止める"]] }
    ],
    flow: { title: "Cost Center予算管理の流れ", steps: ["Plan CategoryをCost Center Budgetとして設定", "Account GroupとProfileを作成", "Budget-relevant Cost CenterへProfileを割当", "ACDOCPへBudgetをImport", "Actual/Commitment投稿時にTolerance Check", "ReportでAvailable Budgetを監視"] },
    keyTakeaways: ["Budgetは承認された拘束枠", "Availability ControlはActualとCommitmentをBudgetに照らす", "Cost Center予算は年次で扱う", "WarningとErrorで業務統制レベルを変える"]
  },
  {
    id: "10",
    title: "New Commitment Management on Cost Centers",
    subtitle: "Predictive Accounting、Extension Ledger、Commitments by Cost Center",
    folder: "10_New Commitment Management Solution on Cost Centers",
    summary: "新しいCommitment Managementは、購買依頼や購買発注に基づく将来費用をExtension Ledger上の予測仕訳として扱います。Cost CenterやWBSへのコミットメントをACDOCAベースで分析でき、Budget Availability ControlやPredictive Accountingとつながります。",
    objectives: ["Commitmentの種類と発生源を説明できる", "ClassicとNew Commitment Managementの違いを説明できる", "Extension LedgerとPredictive Accountingの役割を説明できる", "新Commitment Managementの制約を説明できる", "Commitments by Cost Centerアプリの見方を説明できる"],
    examFocus: ["新CommitmentはExtension LedgerのACDOCA明細で扱う", "旧Commitment tableも並行更新される", "新方式はCost CenterとWBSをサポートし、Manual commitmentやCarryforwardは制限あり", "Purchase Order保存時にPredictive Accounting documentが作成される", "Goods Receiptで予測値がReverseされ、ActualがLeading Ledgerへ記録される"],
    sections: [
      {
        title: "Commitmentは未来の費用",
        body: ["Commitmentは、材料やサービスを依頼・発注したことで将来発生する見込み費用です。Purchase Requisition、Purchase Order、Funds Commitmentが代表的な発生源です。Cost Center、Internal Order、Project/WBSなどのAccount Assignment Objectへ割り当てられます。", "Actual costがまだ発生していなくても、予算枠はすでに消費される見込みです。Budget管理では実績だけを見ると遅いため、Commitmentを含めたAvailable Budgetを見る必要があります。"],
        bullets: ["PRは内部要求で変更しやすい", "POはサプライヤへの契約的な発注", "Funds Commitmentは特定取引前の資金予約"],
        example: "Cost Center 90700に120ユーロの予算があり、130ユーロのPOを作ると、実績発生前でも予算超過が見えます。",
        examTip: "CommitmentはActualではありませんが、Budget消費の判断ではActualと並べて見る対象です。"
      },
      {
        title: "New Commitment ManagementとExtension Ledger",
        body: ["新しいCommitment Managementでは、コミットメントをUniversal Journalと同じ構造に近い形でExtension Ledgerへ保存します。Extension LedgerはUnderlying Ledgerの実績を継承しつつ、予測やシミュレーションの明細を追加で持つ仕組みです。", "Commitment用Extension Ledgerは、将来発生する費用をLeading Ledgerの実績と分けて保持します。これにより、予測値と実績値を同じレポート思想で比較できます。"],
        bullets: ["Extension Ledger Type Pは技術番号のLine itemで削除不可", "Commitmentは実績ではないためExtension Ledgerで分離", "旧Commitment tableも並行更新され、旧レポートやBudget Managementが継続利用できる"],
        example: "PO保存時に、将来の材料消費とGR/IRの予測仕訳がExtension Ledgerに作成され、GR時にそれがReverseされてActualがLeading Ledgerへ入ります。",
        examTip: "新CommitmentはACDOCAベースですが、Leading LedgerのActualと同じではありません。Ledgerで分かれます。"
      },
      {
        title: "制約と前提条件",
        body: ["新Commitment Managementには機能制約があります。サポートされるAccount AssignmentはCost CenterとWBSが中心で、Manual CommitmentやCommitment Carryforwardはサポートされません。対象はPurchase RequisitionとPurchase Orderです。", "使うにはCommitment Management for Controllingを有効化し、Cost CenterマスタでCommitment Updatesがロックされていないこと、Predictive AccountingやExtension Ledger設定が整っていることが必要です。"],
        bullets: ["Freight costの個別Commitmentなど未対応領域がある", "Down payment由来のCommitmentは未サポート", "ACDOCAの新Commitmentを旧補正レポートで自動調整できない"],
        example: "PO行に多数のAccount Assignmentがあるケースでは制限に注意します。学習上は、すべての旧Commitment機能が新方式に置き換わるわけではないと理解します。",
        examTip: "新方式は便利ですが制約が多い、という視点で問われます。特にManual commitmentとCarryforwardは注意です。"
      },
      {
        title: "レポートとBudget Availability",
        body: ["Cost Center Budget ReportはClassic Commitment Managementのデータも含め、Budget、Actual、Commitment、Available Budgetを見ます。一方、Commitments by Cost CenterはExtension Ledger上の新Commitmentを表示します。", "PO時点でBudget Availability Checkが行われ、Goods Receipt時にはPOでチェック済みのため通常は追加警告が出ません。ただし実際の受入額が発注額を超える場合などは再チェックされます。"],
        bullets: ["Commitments by Cost CenterはPR/POなど原始文書へドリルダウンできる", "ActualはLeading Ledger、CommitmentはExtension Ledgerを参照する", "Multidimensional reportで予測値と実績値を比較できる"],
        example: "Cost Centerの予算120に対してPO130を作ると、Available Budgetはマイナスになります。GR後はCommitmentが減り、Actualが増えます。",
        examTip: "どのアプリがClassicとNewのどちらを見るかは試験で狙いやすいです。"
      }
    ],
    tables: [
      { title: "ClassicとNew Commitment Management", columns: ["観点", "Classic", "New"], rows: [["保存先", "COOIなど旧Commitment table", "ACDOCAのExtension Ledger"], ["主な表示", "従来Commitmentレポート、Budget Report", "Commitments by Cost Center"], ["対象", "Cost Center、Order、Projectなど", "主にCost Center、WBS"], ["Manual Commitment", "利用可能", "未サポート"], ["Carryforward", "利用可能", "未サポート"]] },
      { title: "POからGRまでのLedger動き", columns: ["イベント", "Extension Ledger", "Leading Ledger"], rows: [["PO保存", "予測材料消費とGR/IRを記録", "実績なし"], ["Goods Receipt", "予測値をReverse", "実際の材料費とGR/IRを記録"], ["Reporting", "Commitment/Forecastとして参照", "Actualとして参照"]] }
    ],
    flow: { title: "新Commitmentの流れ", steps: ["Extension Ledgerを設定", "Predictive AccountingとCommitment Managementを有効化", "Cost CenterにPO/PRを割当", "Extension LedgerへCommitmentを記録", "Budget Availabilityをチェック", "GRでCommitmentをReverseしActualを記録"] },
    keyTakeaways: ["Commitmentは未来費用でありBudget消費に効く", "新方式はExtension LedgerとPredictive Accountingで理解する", "Classic tableも並行更新される", "Commitments by Cost Centerは新方式の重要レポート"]
  }
];