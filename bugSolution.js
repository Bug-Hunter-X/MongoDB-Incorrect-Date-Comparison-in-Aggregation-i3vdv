```javascript
const query = {"date": {"$gte": ISODate("2024-03-10T00:00:00Z"), "$lt": ISODate("2024-03-11T00:00:00Z")}};
db.collection.find(query);
```