```javascript
const query = { "$expr": { "$eq": [{"date": {"$dateToString": {"format": "%Y-%m-%d", "date": "$date"}}}, "2024-03-10"]}};
db.collection.find(query);
```