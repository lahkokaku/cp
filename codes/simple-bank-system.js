// Difficulty: Medium
// https://leetcode.com/problems/simple-bank-system

/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.bank = new Map()
    this.maxNumber = balance.length

    for (let i = 0; i < balance.length; i++) {
        this.bank.set(i + 1, balance[i])
    }
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (account1 > this.maxNumber || account2 > this.maxNumber) {
        return false
    }

    const from = this.bank.get(account1) 
    if (from < money) {
        return false
    }

    this.bank.set(account1, from - money)
    this.bank.set(account2, this.bank.get(account2) + money)

    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if (account > this.maxNumber) {
        return false
    }
    
    this.bank.set(account, this.bank.get(account) + money)
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if (account > this.maxNumber) {
        return false
    }
    const from = this.bank.get(account) 
    if (from < money) {
        return false
    }

    this.bank.set(account, this.bank.get(account) - money)
    return true
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */