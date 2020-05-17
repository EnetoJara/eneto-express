# @eneto/express

es6-class wrapper for express

```javascript
export class Application extends Express {
    constructor () {
        this.use(cors())
        this.use(helmet())
    }
}
```
