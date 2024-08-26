/**
 * 数値を3桁区切りの文字列にフォーマットする関数
 * @param {string} input - フォーマットする数値の文字列
 * @returns {string} フォーマットされた数値の文字列
 */
function formatNumber(input) {
    var value = input.replace(/,/g, ''); // カンマを除去
    if (!isNaN(value) && value.length > 0) {
        return parseFloat(value).toLocaleString(); // 3桁区切りにフォーマット
    } else {
        return '0'; // 入力が空なら0を返す
    }
}

/**
 * 入力が正しい数値かどうかを確認する関数
 * @param {string} input - 入力された値
 * @returns {boolean} 入力が有効な数値ならtrueを返す
 */
function isValidNumber(input) {
    var value = input.replace(/,/g, ''); // カンマを除去
    return !isNaN(value) && value.trim() !== ''; // 数値であり、空ではないことを確認
}

/**
 * 予算残を計算する関数
 */
function calculateBudgetLeft() {
    var currentBudget = document.getElementById("currentBudget").value.replace(/,/g, '') || '0';
    var unclassified = document.getElementById("unclassified").value.replace(/,/g, '') || '0';

    if (isValidNumber(currentBudget) && isValidNumber(unclassified)) {
        var budgetLeft = parseFloat(currentBudget) - parseFloat(unclassified);
        document.getElementById("budgetLeft").textContent = budgetLeft.toLocaleString();
        return budgetLeft;
    } else {
        document.getElementById("budgetLeft").textContent = '0';
        return 0;
    }
}

/**
 * GAPを計算する関数
 */
function calculateGAP() {
    var budgetLeft = calculateBudgetLeft();
    var bankBalance = document.getElementById("bankBalance").value.replace(/,/g, '') || '0';

    if (isValidNumber(bankBalance)) {
        var gap = budgetLeft - parseFloat(bankBalance);
        document.getElementById("gap").textContent = gap.toLocaleString();
    } else {
        document.getElementById("gap").textContent = '0';
    }
}

/**
 * 入力フィールドの値をフォーマットし、必要に応じて計算を実行する関数
 * @param {Event} event - 入力イベント
 */
function formatAndCalculate(event) {
    var input = event.target; // イベントが発生した入力フィールドを取得
    input.value = formatNumber(input.value); // 入力値を3桁区切りにフォーマット

    if (input.id === "currentBudget" || input.id === "unclassified") {
        calculateBudgetLeft(); // 現在予算または未分類残が入力されたら予算残を計算
    } else if (input.id === "bankBalance") {
        calculateGAP(); // 三井住友銀行の現残高が入力されたらGAPを計算
    }
}

/**
 * フォームをリセットし、すべてのフィールドを初期化する関数
 */
function resetForm() {
    document.getElementById("budgetForm").reset(); // フォームの入力フィールドをリセット
    document.getElementById("budgetLeft").textContent = '0'; // 予算残を初期化
    document.getElementById("gap").textContent = '0'; // GAPを初期化
}

// 各入力フィールドに対して、入力イベントが発生した際にフォーマットと計算を行う
document.getElementById("currentBudget").addEventListener("input", formatAndCalculate);
document.getElementById("unclassified").addEventListener("input", formatAndCalculate);
document.getElementById("bankBalance").addEventListener("input", formatAndCalculate);

// リセットボタンにクリックイベントを追加し、リセット機能を実行
document.getElementById("resetButton").addEventListener("click", resetForm);
