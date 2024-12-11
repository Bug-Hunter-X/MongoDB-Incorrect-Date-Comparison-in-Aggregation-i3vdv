# MongoDB Incorrect Date Comparison in Aggregation

This repository demonstrates a common error when comparing dates in MongoDB aggregation pipelines. The provided code snippet attempts to compare dates, but due to the use of `$dateToString`, it performs a string comparison instead of a date comparison, potentially yielding incorrect results. 

The `bug.js` file showcases the problematic code, and the `bugSolution.js` file illustrates the corrected approach.

## Bug

The `$dateToString` operator converts dates to strings, causing the comparison to be string-based, rather than date-based. This can lead to unexpected behavior and inaccurate results.  For example, lexicographical comparison '2024-03-10' > '2024-01-15' is true, but as a date, the opposite is correct.