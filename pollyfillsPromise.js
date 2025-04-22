// Promise methods ie (resolve,reject, all, allSettled, any, race)
const STATE = {
    FULFILLED: "fulfilled",
    PENDING: "pending",
    REJECTED: "rejected"

}

class MyPromiseMethod {

    static resolve(val) {
        return new Promise(res => {
            res(val)
        })
    }


    static reject(val) {
        return new Promise((_, rej) => {
            rej(val)
        })
    }

    static all(promises) {
        let result = [];
        let counter = 0;
        return new Promise((res, rej) => {
            if (!promises.length) return result
            for (let i = 0; i < promises.length; i++) {
                let promise = promises[i]
                promise.then((val) => {
                    counter++
                    result[i] = val
                    if (counter === promises.length) {
                        res(result)
                    }
                }).catch(rej)
            }
        })
    }

    static allSettled(promises) {
        let result = [];
        let counter = 0;
        return new Promise((res) => {
            if (!promises.length) return result
            for (let i = 0; i < promises.length; i++) {
                let promise = promises[i]
                promise.then((val) => {
                    result[i] = { status: STATE.FULFILLED, value: val }
                }).catch((err) => {
                    result[i] = { status: STATE.REJECTED, reason: err }

                }).finally(() => {
                    counter++
                    if (counter === promises.length) {
                        res(result)
                    }
                })
            }
        })
    }

    static race(promises) {
        return new Promise((res, rej) => {
            if (!promises.length) return result
            for (let i = 0; i < promises.length; i++) {
                let promise = promises[i]
                promise.then(res).catch(rej)
            }
        })
    }

    static any(promises) {
        return new Promise((res, rej) => {
            let errors = []
            counterRejected = 0
            if (!promises.length) return result
            for (let i = 0; i < promises.length; i++) {
                let promise = promises[i]
                promise.then(res).catch((err) => {
                    counterRejected++
                    errors[i] = err
                    if (counterRejected === promises.length) {
                        rej(new AggregateError(errors, "All Promises Rejected"))
                    }
                })
            }
        })
    }
}


































// TODO: custom promise



class MyPromise {
    #thenCbs = [];
    #catchCbs = []
    #state = STATE.PENDING
    #value
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)
    constructor(cb) {
        try {

            cb(this.#onSuccessBind, this.#onFailBind)

        } catch (error) {
            this.#onFail(error)
        }
    }
    #runCallBacks() {
        if (this.#state === STATE.FULFILLED) {
            this.#thenCbs.forEach((cb) => {
                cb(this.#value)
            })
            this.#thenCbs = []
        }
        if (this.#state === STATE.REJECTED) {
            this.#catchCbs.forEach((cb) => {
                cb(this.#value)
            })
            this.#catchCbs = []

        }
    }
    #onSuccess(value) {
        if (this.#state !== STATE.PENDING) return
        this.#value = value
        this.#state = STATE.FULFILLED
        this.#runCallBacks()
    }
    #onFail(value) {
        if (this.#state !== STATE.PENDING) return
        this.#value = value
        this.#state = STATE.REJECTED
        this.#runCallBacks()

    }

    then(thenCb, catchCb) {
        return new MyPromise((resolve, reject) => {
            if (thenCb !== null) this.#thenCbs.push(thenCb)
            if (catchCb !== null) this.#catchCbs.push(catchCb)

            this.#runCallBacks()
        })
    }

    catch(cb) {
        this.then(undefined, cb)
    }
    finally(cb) {

    }
}


const p = new MyPromise((res, rej) => {

})