❌ Bad Code:
```javascript
function sum() { return a + b }
```

🔍 Issues:
* ❌ The function `sum` relies on global variables `a` and `b`, which is bad practice. It makes the function
unpredictable and hard to maintain.
* ❌ The function doesn't have any input parameters specified

✅ Recommended Fix:

```javascript
function sum(a, b) { return a + b; }
```

💡 Improvements:

* ✔ The function now accepts `a` and `b` as parameters, making it reusable and predictable.
* ✔ The function will return the sum of `a` and `b`.