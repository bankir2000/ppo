(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        s(r);
    new MutationObserver(r=>{
        for (const o of r)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity),
        r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
        r.crossorigin === "use-credentials" ? o.credentials = "include" : r.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function s(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
}
)();
function cs(e, t) {
    const n = Object.create(null)
      , s = e.split(",");
    for (let r = 0; r < s.length; r++)
        n[s[r]] = !0;
    return t ? r=>!!n[r.toLowerCase()] : r=>!!n[r]
}
function us(e) {
    if (L(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n]
              , r = ae(s) ? qo(s) : us(s);
            if (r)
                for (const o in r)
                    t[o] = r[o]
        }
        return t
    } else {
        if (ae(e))
            return e;
        if (ne(e))
            return e
    }
}
const Ko = /;(?![^(]*\))/g
  , $o = /:([^]+)/
  , zo = /\/\*.*?\*\//gs;
function qo(e) {
    const t = {};
    return e.replace(zo, "").split(Ko).forEach(n=>{
        if (n) {
            const s = n.split($o);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }
    ),
    t
}
function En(e) {
    let t = "";
    if (ae(e))
        t = e;
    else if (L(e))
        for (let n = 0; n < e.length; n++) {
            const s = En(e[n]);
            s && (t += s + " ")
        }
    else if (ne(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Wo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Qo = cs(Wo);
function kr(e) {
    return !!e || e === ""
}
function Yo(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let s = 0; n && s < e.length; s++)
        n = pn(e[s], t[s]);
    return n
}
function pn(e, t) {
    if (e === t)
        return !0;
    let n = Fs(e)
      , s = Fs(t);
    if (n || s)
        return n && s ? e.getTime() === t.getTime() : !1;
    if (n = $t(e),
    s = $t(t),
    n || s)
        return e === t;
    if (n = L(e),
    s = L(t),
    n || s)
        return n && s ? Yo(e, t) : !1;
    if (n = ne(e),
    s = ne(t),
    n || s) {
        if (!n || !s)
            return !1;
        const r = Object.keys(e).length
          , o = Object.keys(t).length;
        if (r !== o)
            return !1;
        for (const i in e) {
            const l = e.hasOwnProperty(i)
              , c = t.hasOwnProperty(i);
            if (l && !c || !l && c || !pn(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
const We = e=>ae(e) ? e : e == null ? "" : L(e) || ne(e) && (e.toString === Sr || !V(e.toString)) ? JSON.stringify(e, Ar, 2) : String(e)
  , Ar = (e,t)=>t && t.__v_isRef ? Ar(e, t.value) : wt(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`] = r,
    n), {})
} : Or(t) ? {
    [`Set(${t.size})`]: [...t.values()]
} : ne(t) && !L(t) && !Tr(t) ? String(t) : t
  , re = {}
  , Et = []
  , je = ()=>{}
  , Jo = ()=>!1
  , Xo = /^on[^a-z]/
  , wn = e=>Xo.test(e)
  , fs = e=>e.startsWith("onUpdate:")
  , be = Object.assign
  , as = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Zo = Object.prototype.hasOwnProperty
  , W = (e,t)=>Zo.call(e, t)
  , L = Array.isArray
  , wt = e=>Zt(e) === "[object Map]"
  , Or = e=>Zt(e) === "[object Set]"
  , Fs = e=>Zt(e) === "[object Date]"
  , V = e=>typeof e == "function"
  , ae = e=>typeof e == "string"
  , $t = e=>typeof e == "symbol"
  , ne = e=>e !== null && typeof e == "object"
  , Ir = e=>ne(e) && V(e.then) && V(e.catch)
  , Sr = Object.prototype.toString
  , Zt = e=>Sr.call(e)
  , Go = e=>Zt(e).slice(8, -1)
  , Tr = e=>Zt(e) === "[object Object]"
  , ds = e=>ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , un = cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Cn = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , ei = /-(\w)/g
  , Ke = Cn(e=>e.replace(ei, (t,n)=>n ? n.toUpperCase() : ""))
  , ti = /\B([A-Z])/g
  , Ot = Cn(e=>e.replace(ti, "-$1").toLowerCase())
  , Pn = Cn(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , Fn = Cn(e=>e ? `on${Pn(e)}` : "")
  , zt = (e,t)=>!Object.is(e, t)
  , fn = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , gn = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , zn = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
;
let Ls;
const ni = ()=>Ls || (Ls = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Ne;
class Nr {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Ne,
        !t && Ne && (this.index = (Ne.scopes || (Ne.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Ne;
            try {
                return Ne = this,
                t()
            } finally {
                Ne = n
            }
        }
    }
    on() {
        Ne = this
    }
    off() {
        Ne = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, s;
            for (n = 0,
            s = this.effects.length; n < s; n++)
                this.effects[n].stop();
            for (n = 0,
            s = this.cleanups.length; n < s; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                s = this.scopes.length; n < s; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r,
                r.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function si(e) {
    return new Nr(e)
}
function ri(e, t=Ne) {
    t && t.active && t.effects.push(e)
}
function oi() {
    return Ne
}
const hs = e=>{
    const t = new Set(e);
    return t.w = 0,
    t.n = 0,
    t
}
  , Fr = e=>(e.w & st) > 0
  , Lr = e=>(e.n & st) > 0
  , ii = ({deps: e})=>{
    if (e.length)
        for (let t = 0; t < e.length; t++)
            e[t].w |= st
}
  , li = e=>{
    const {deps: t} = e;
    if (t.length) {
        let n = 0;
        for (let s = 0; s < t.length; s++) {
            const r = t[s];
            Fr(r) && !Lr(r) ? r.delete(e) : t[n++] = r,
            r.w &= ~st,
            r.n &= ~st
        }
        t.length = n
    }
}
  , qn = new WeakMap;
let Ht = 0
  , st = 1;
const Wn = 30;
let Fe;
const pt = Symbol("")
  , Qn = Symbol("");
class ps {
    constructor(t, n=null, s) {
        this.fn = t,
        this.scheduler = n,
        this.active = !0,
        this.deps = [],
        this.parent = void 0,
        ri(this, s)
    }
    run() {
        if (!this.active)
            return this.fn();
        let t = Fe
          , n = tt;
        for (; t; ) {
            if (t === this)
                return;
            t = t.parent
        }
        try {
            return this.parent = Fe,
            Fe = this,
            tt = !0,
            st = 1 << ++Ht,
            Ht <= Wn ? ii(this) : js(this),
            this.fn()
        } finally {
            Ht <= Wn && li(this),
            st = 1 << --Ht,
            Fe = this.parent,
            tt = n,
            this.parent = void 0,
            this.deferStop && this.stop()
        }
    }
    stop() {
        Fe === this ? this.deferStop = !0 : this.active && (js(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function js(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++)
            t[n].delete(e);
        t.length = 0
    }
}
let tt = !0;
const jr = [];
function It() {
    jr.push(tt),
    tt = !1
}
function St() {
    const e = jr.pop();
    tt = e === void 0 ? !0 : e
}
function Ce(e, t, n) {
    if (tt && Fe) {
        let s = qn.get(e);
        s || qn.set(e, s = new Map);
        let r = s.get(n);
        r || s.set(n, r = hs()),
        Hr(r)
    }
}
function Hr(e, t) {
    let n = !1;
    Ht <= Wn ? Lr(e) || (e.n |= st,
    n = !Fr(e)) : n = !e.has(Fe),
    n && (e.add(Fe),
    Fe.deps.push(e))
}
function Ye(e, t, n, s, r, o) {
    const i = qn.get(e);
    if (!i)
        return;
    let l = [];
    if (t === "clear")
        l = [...i.values()];
    else if (n === "length" && L(e)) {
        const c = Number(s);
        i.forEach((a,f)=>{
            (f === "length" || f >= c) && l.push(a)
        }
        )
    } else
        switch (n !== void 0 && l.push(i.get(n)),
        t) {
        case "add":
            L(e) ? ds(n) && l.push(i.get("length")) : (l.push(i.get(pt)),
            wt(e) && l.push(i.get(Qn)));
            break;
        case "delete":
            L(e) || (l.push(i.get(pt)),
            wt(e) && l.push(i.get(Qn)));
            break;
        case "set":
            wt(e) && l.push(i.get(pt));
            break
        }
    if (l.length === 1)
        l[0] && Yn(l[0]);
    else {
        const c = [];
        for (const a of l)
            a && c.push(...a);
        Yn(hs(c))
    }
}
function Yn(e, t) {
    const n = L(e) ? e : [...e];
    for (const s of n)
        s.computed && Hs(s);
    for (const s of n)
        s.computed || Hs(s)
}
function Hs(e, t) {
    (e !== Fe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const ci = cs("__proto__,__v_isRef,__isVue")
  , Ur = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter($t))
  , ui = gs()
  , fi = gs(!1, !0)
  , ai = gs(!0)
  , Us = di();
function di() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const s = Q(this);
            for (let o = 0, i = this.length; o < i; o++)
                Ce(s, "get", o + "");
            const r = s[t](...n);
            return r === -1 || r === !1 ? s[t](...n.map(Q)) : r
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            It();
            const s = Q(this)[t].apply(this, n);
            return St(),
            s
        }
    }
    ),
    e
}
function hi(e) {
    const t = Q(this);
    return Ce(t, "has", e),
    t.hasOwnProperty(e)
}
function gs(e=!1, t=!1) {
    return function(s, r, o) {
        if (r === "__v_isReactive")
            return !e;
        if (r === "__v_isReadonly")
            return e;
        if (r === "__v_isShallow")
            return t;
        if (r === "__v_raw" && o === (e ? t ? Ai : $r : t ? Kr : Dr).get(s))
            return s;
        const i = L(s);
        if (!e) {
            if (i && W(Us, r))
                return Reflect.get(Us, r, o);
            if (r === "hasOwnProperty")
                return hi
        }
        const l = Reflect.get(s, r, o);
        return ($t(r) ? Ur.has(r) : ci(r)) || (e || Ce(s, "get", r),
        t) ? l : he(l) ? i && ds(r) ? l : l.value : ne(l) ? e ? zr(l) : Gt(l) : l
    }
}
const pi = Br()
  , gi = Br(!0);
function Br(e=!1) {
    return function(n, s, r, o) {
        let i = n[s];
        if (Rt(i) && he(i) && !he(r))
            return !1;
        if (!e && (!mn(r) && !Rt(r) && (i = Q(i),
        r = Q(r)),
        !L(n) && he(i) && !he(r)))
            return i.value = r,
            !0;
        const l = L(n) && ds(s) ? Number(s) < n.length : W(n, s)
          , c = Reflect.set(n, s, r, o);
        return n === Q(o) && (l ? zt(r, i) && Ye(n, "set", s, r) : Ye(n, "add", s, r)),
        c
    }
}
function mi(e, t) {
    const n = W(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && n && Ye(e, "delete", t, void 0),
    s
}
function _i(e, t) {
    const n = Reflect.has(e, t);
    return (!$t(t) || !Ur.has(t)) && Ce(e, "has", t),
    n
}
function yi(e) {
    return Ce(e, "iterate", L(e) ? "length" : pt),
    Reflect.ownKeys(e)
}
const Vr = {
    get: ui,
    set: pi,
    deleteProperty: mi,
    has: _i,
    ownKeys: yi
}
  , bi = {
    get: ai,
    set(e, t) {
        return !0
    },
    deleteProperty(e, t) {
        return !0
    }
}
  , vi = be({}, Vr, {
    get: fi,
    set: gi
})
  , ms = e=>e
  , Rn = e=>Reflect.getPrototypeOf(e);
function tn(e, t, n=!1, s=!1) {
    e = e.__v_raw;
    const r = Q(e)
      , o = Q(t);
    n || (t !== o && Ce(r, "get", t),
    Ce(r, "get", o));
    const {has: i} = Rn(r)
      , l = s ? ms : n ? vs : qt;
    if (i.call(r, t))
        return l(e.get(t));
    if (i.call(r, o))
        return l(e.get(o));
    e !== r && e.get(t)
}
function nn(e, t=!1) {
    const n = this.__v_raw
      , s = Q(n)
      , r = Q(e);
    return t || (e !== r && Ce(s, "has", e),
    Ce(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
}
function sn(e, t=!1) {
    return e = e.__v_raw,
    !t && Ce(Q(e), "iterate", pt),
    Reflect.get(e, "size", e)
}
function Bs(e) {
    e = Q(e);
    const t = Q(this);
    return Rn(t).has.call(t, e) || (t.add(e),
    Ye(t, "add", e, e)),
    this
}
function Vs(e, t) {
    t = Q(t);
    const n = Q(this)
      , {has: s, get: r} = Rn(n);
    let o = s.call(n, e);
    o || (e = Q(e),
    o = s.call(n, e));
    const i = r.call(n, e);
    return n.set(e, t),
    o ? zt(t, i) && Ye(n, "set", e, t) : Ye(n, "add", e, t),
    this
}
function Ds(e) {
    const t = Q(this)
      , {has: n, get: s} = Rn(t);
    let r = n.call(t, e);
    r || (e = Q(e),
    r = n.call(t, e)),
    s && s.call(t, e);
    const o = t.delete(e);
    return r && Ye(t, "delete", e, void 0),
    o
}
function Ks() {
    const e = Q(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Ye(e, "clear", void 0, void 0),
    n
}
function rn(e, t) {
    return function(s, r) {
        const o = this
          , i = o.__v_raw
          , l = Q(i)
          , c = t ? ms : e ? vs : qt;
        return !e && Ce(l, "iterate", pt),
        i.forEach((a,f)=>s.call(r, c(a), c(f), o))
    }
}
function on(e, t, n) {
    return function(...s) {
        const r = this.__v_raw
          , o = Q(r)
          , i = wt(o)
          , l = e === "entries" || e === Symbol.iterator && i
          , c = e === "keys" && i
          , a = r[e](...s)
          , f = n ? ms : t ? vs : qt;
        return !t && Ce(o, "iterate", c ? Qn : pt),
        {
            next() {
                const {value: d, done: p} = a.next();
                return p ? {
                    value: d,
                    done: p
                } : {
                    value: l ? [f(d[0]), f(d[1])] : f(d),
                    done: p
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Xe(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}
function xi() {
    const e = {
        get(o) {
            return tn(this, o)
        },
        get size() {
            return sn(this)
        },
        has: nn,
        add: Bs,
        set: Vs,
        delete: Ds,
        clear: Ks,
        forEach: rn(!1, !1)
    }
      , t = {
        get(o) {
            return tn(this, o, !1, !0)
        },
        get size() {
            return sn(this)
        },
        has: nn,
        add: Bs,
        set: Vs,
        delete: Ds,
        clear: Ks,
        forEach: rn(!1, !0)
    }
      , n = {
        get(o) {
            return tn(this, o, !0)
        },
        get size() {
            return sn(this, !0)
        },
        has(o) {
            return nn.call(this, o, !0)
        },
        add: Xe("add"),
        set: Xe("set"),
        delete: Xe("delete"),
        clear: Xe("clear"),
        forEach: rn(!0, !1)
    }
      , s = {
        get(o) {
            return tn(this, o, !0, !0)
        },
        get size() {
            return sn(this, !0)
        },
        has(o) {
            return nn.call(this, o, !0)
        },
        add: Xe("add"),
        set: Xe("set"),
        delete: Xe("delete"),
        clear: Xe("clear"),
        forEach: rn(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o=>{
        e[o] = on(o, !1, !1),
        n[o] = on(o, !0, !1),
        t[o] = on(o, !1, !0),
        s[o] = on(o, !0, !0)
    }
    ),
    [e, n, t, s]
}
const [Ei,wi,Ci,Pi] = xi();
function _s(e, t) {
    const n = t ? e ? Pi : Ci : e ? wi : Ei;
    return (s,r,o)=>r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(W(n, r) && r in s ? n : s, r, o)
}
const Ri = {
    get: _s(!1, !1)
}
  , Mi = {
    get: _s(!1, !0)
}
  , ki = {
    get: _s(!0, !1)
}
  , Dr = new WeakMap
  , Kr = new WeakMap
  , $r = new WeakMap
  , Ai = new WeakMap;
function Oi(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function Ii(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Oi(Go(e))
}
function Gt(e) {
    return Rt(e) ? e : ys(e, !1, Vr, Ri, Dr)
}
function Si(e) {
    return ys(e, !1, vi, Mi, Kr)
}
function zr(e) {
    return ys(e, !0, bi, ki, $r)
}
function ys(e, t, n, s, r) {
    if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = r.get(e);
    if (o)
        return o;
    const i = Ii(e);
    if (i === 0)
        return e;
    const l = new Proxy(e,i === 2 ? s : n);
    return r.set(e, l),
    l
}
function Ct(e) {
    return Rt(e) ? Ct(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Rt(e) {
    return !!(e && e.__v_isReadonly)
}
function mn(e) {
    return !!(e && e.__v_isShallow)
}
function qr(e) {
    return Ct(e) || Rt(e)
}
function Q(e) {
    const t = e && e.__v_raw;
    return t ? Q(t) : e
}
function bs(e) {
    return gn(e, "__v_skip", !0),
    e
}
const qt = e=>ne(e) ? Gt(e) : e
  , vs = e=>ne(e) ? zr(e) : e;
function Wr(e) {
    tt && Fe && (e = Q(e),
    Hr(e.dep || (e.dep = hs())))
}
function Qr(e, t) {
    e = Q(e);
    const n = e.dep;
    n && Yn(n)
}
function he(e) {
    return !!(e && e.__v_isRef === !0)
}
function xs(e) {
    return Yr(e, !1)
}
function Ti(e) {
    return Yr(e, !0)
}
function Yr(e, t) {
    return he(e) ? e : new Ni(e,t)
}
class Ni {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : Q(t),
        this._value = n ? t : qt(t)
    }
    get value() {
        return Wr(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || mn(t) || Rt(t);
        t = n ? t : Q(t),
        zt(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : qt(t),
        Qr(this))
    }
}
function gt(e) {
    return he(e) ? e.value : e
}
const Fi = {
    get: (e,t,n)=>gt(Reflect.get(e, t, n)),
    set: (e,t,n,s)=>{
        const r = e[t];
        return he(r) && !he(n) ? (r.value = n,
        !0) : Reflect.set(e, t, n, s)
    }
};
function Jr(e) {
    return Ct(e) ? e : new Proxy(e,Fi)
}
var Xr;
class Li {
    constructor(t, n, s, r) {
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this[Xr] = !1,
        this._dirty = !0,
        this.effect = new ps(t,()=>{
            this._dirty || (this._dirty = !0,
            Qr(this))
        }
        ),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !r,
        this.__v_isReadonly = s
    }
    get value() {
        const t = Q(this);
        return Wr(t),
        (t._dirty || !t._cacheable) && (t._dirty = !1,
        t._value = t.effect.run()),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
}
Xr = "__v_isReadonly";
function ji(e, t, n=!1) {
    let s, r;
    const o = V(e);
    return o ? (s = e,
    r = je) : (s = e.get,
    r = e.set),
    new Li(s,r,o || !r,n)
}
function nt(e, t, n, s) {
    let r;
    try {
        r = s ? e(...s) : e()
    } catch (o) {
        Mn(o, t, n)
    }
    return r
}
function ke(e, t, n, s) {
    if (V(e)) {
        const o = nt(e, t, n, s);
        return o && Ir(o) && o.catch(i=>{
            Mn(i, t, n)
        }
        ),
        o
    }
    const r = [];
    for (let o = 0; o < e.length; o++)
        r.push(ke(e[o], t, n, s));
    return r
}
function Mn(e, t, n, s=!0) {
    const r = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const i = t.proxy
          , l = n;
        for (; o; ) {
            const a = o.ec;
            if (a) {
                for (let f = 0; f < a.length; f++)
                    if (a[f](e, i, l) === !1)
                        return
            }
            o = o.parent
        }
        const c = t.appContext.config.errorHandler;
        if (c) {
            nt(c, null, 10, [e, i, l]);
            
            return
        }
    }
    Hi(e, n, r, s)
}
function Hi(e, t, n, s=!0) {
    console.error(e)
}
let Wt = !1
  , Jn = !1;
const ye = [];
let De = 0;
const Pt = [];
let qe = null
  , ut = 0;
const Zr = Promise.resolve();
let Es = null;
function Gr(e) {
    const t = Es || Zr;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Ui(e) {
    let t = De + 1
      , n = ye.length;
    for (; t < n; ) {
        const s = t + n >>> 1;
        Qt(ye[s]) < e ? t = s + 1 : n = s
    }
    return t
}
function ws(e) {
    (!ye.length || !ye.includes(e, Wt && e.allowRecurse ? De + 1 : De)) && (e.id == null ? ye.push(e) : ye.splice(Ui(e.id), 0, e),
    eo())
}
function eo() {
    !Wt && !Jn && (Jn = !0,
    Es = Zr.then(no))
}
function Bi(e) {
    const t = ye.indexOf(e);
    t > De && ye.splice(t, 1)
}
function Vi(e) {
    L(e) ? Pt.push(...e) : (!qe || !qe.includes(e, e.allowRecurse ? ut + 1 : ut)) && Pt.push(e),
    eo()
}
function $s(e, t=Wt ? De + 1 : 0) {
    for (; t < ye.length; t++) {
        const n = ye[t];
        n && n.pre && (ye.splice(t, 1),
        t--,
        n())
    }
}
function to(e) {
    if (Pt.length) {
        const t = [...new Set(Pt)];
        if (Pt.length = 0,
        qe) {
            qe.push(...t);
            return
        }
        for (qe = t,
        qe.sort((n,s)=>Qt(n) - Qt(s)),
        ut = 0; ut < qe.length; ut++)
            qe[ut]();
        qe = null,
        ut = 0
    }
}
const Qt = e=>e.id == null ? 1 / 0 : e.id
  , Di = (e,t)=>{
    const n = Qt(e) - Qt(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function no(e) {
    Jn = !1,
    Wt = !0,
    ye.sort(Di);
    const t = je;
    try {
        for (De = 0; De < ye.length; De++) {
            const n = ye[De];
            n && n.active !== !1 && nt(n, null, 14)
        }
    } finally {
        De = 0,
        ye.length = 0,
        to(),
        Wt = !1,
        Es = null,
        (ye.length || Pt.length) && no()
    }
}
function Ki(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const s = e.vnode.props || re;
    let r = n;
    const o = t.startsWith("update:")
      , i = o && t.slice(7);
    if (i && i in s) {
        const f = `${i === "modelValue" ? "model" : i}Modifiers`
          , {number: d, trim: p} = s[f] || re;
        p && (r = n.map(_=>ae(_) ? _.trim() : _)),
        d && (r = n.map(zn))
    }
    let l, c = s[l = Fn(t)] || s[l = Fn(Ke(t))];
    !c && o && (c = s[l = Fn(Ot(t))]),
    c && ke(c, e, 6, r);
    const a = s[l + "Once"];
    if (a) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[l])
            return;
        e.emitted[l] = !0,
        ke(a, e, 6, r)
    }
}
function so(e, t, n=!1) {
    const s = t.emitsCache
      , r = s.get(e);
    if (r !== void 0)
        return r;
    const o = e.emits;
    let i = {}
      , l = !1;
    if (!V(e)) {
        const c = a=>{
            const f = so(a, t, !0);
            f && (l = !0,
            be(i, f))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    return !o && !l ? (ne(e) && s.set(e, null),
    null) : (L(o) ? o.forEach(c=>i[c] = null) : be(i, o),
    ne(e) && s.set(e, i),
    i)
}
function kn(e, t) {
    return !e || !wn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    W(e, t[0].toLowerCase() + t.slice(1)) || W(e, Ot(t)) || W(e, t))
}
let pe = null
  , ro = null;
function _n(e) {
    const t = pe;
    return pe = e,
    ro = e && e.type.__scopeId || null,
    t
}
function $i(e, t=pe, n) {
    if (!t || e._n)
        return e;
    const s = (...r)=>{
        s._d && er(-1);
        const o = _n(t);
        let i;
        try {
            i = e(...r)
        } finally {
            _n(o),
            s._d && er(1)
        }
        return i
    }
    ;
    return s._n = !0,
    s._c = !0,
    s._d = !0,
    s
}
function Ln(e) {
    const {type: t, vnode: n, proxy: s, withProxy: r, props: o, propsOptions: [i], slots: l, attrs: c, emit: a, render: f, renderCache: d, data: p, setupState: _, ctx: k, inheritAttrs: R} = e;
    let H, A;
    const j = _n(e);
    try {
        if (n.shapeFlag & 4) {
            const z = r || s;
            H = Ve(f.call(z, z, d, o, _, p, k)),
            A = c
        } else {
            const z = t;
            H = Ve(z.length > 1 ? z(o, {
                attrs: c,
                slots: l,
                emit: a
            }) : z(o, null)),
            A = t.props ? c : zi(c)
        }
    } catch (z) {
        Vt.length = 0,
        Mn(z, e, 1),
        H = F(Ae)
    }
    let I = H;
    if (A && R !== !1) {
        const z = Object.keys(A)
          , {shapeFlag: oe} = I;
        z.length && oe & 7 && (i && z.some(fs) && (A = qi(A, i)),
        I = rt(I, A))
    }
    return n.dirs && (I = rt(I),
    I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs),
    n.transition && (I.transition = n.transition),
    H = I,
    _n(j),
    H
}
const zi = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || wn(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , qi = (e,t)=>{
    const n = {};
    for (const s in e)
        (!fs(s) || !(s.slice(9)in t)) && (n[s] = e[s]);
    return n
}
;
function Wi(e, t, n) {
    const {props: s, children: r, component: o} = e
      , {props: i, children: l, patchFlag: c} = t
      , a = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return s ? zs(s, i, a) : !!i;
        if (c & 8) {
            const f = t.dynamicProps;
            for (let d = 0; d < f.length; d++) {
                const p = f[d];
                if (i[p] !== s[p] && !kn(a, p))
                    return !0
            }
        }
    } else
        return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? zs(s, i, a) : !0 : !!i;
    return !1
}
function zs(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < s.length; r++) {
        const o = s[r];
        if (t[o] !== e[o] && !kn(n, o))
            return !0
    }
    return !1
}
function Qi({vnode: e, parent: t}, n) {
    for (; t && t.subTree === e; )
        (e = t.vnode).el = n,
        t = t.parent
}
const Yi = e=>e.__isSuspense;
function Ji(e, t) {
    t && t.pendingBranch ? L(e) ? t.effects.push(...e) : t.effects.push(e) : Vi(e)
}
function an(e, t) {
    if (ce) {
        let n = ce.provides;
        const s = ce.parent && ce.parent.provides;
        s === n && (n = ce.provides = Object.create(s)),
        n[e] = t
    }
}
function Qe(e, t, n=!1) {
    const s = ce || pe;
    if (s) {
        const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return n && V(t) ? t.call(s.proxy) : t
    }
}
const ln = {};
function dn(e, t, n) {
    return oo(e, t, n)
}
function oo(e, t, {immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i}=re) {
    const l = oi() === (ce == null ? void 0 : ce.scope) ? ce : null;
    let c, a = !1, f = !1;
    if (he(e) ? (c = ()=>e.value,
    a = mn(e)) : Ct(e) ? (c = ()=>e,
    s = !0) : L(e) ? (f = !0,
    a = e.some(I=>Ct(I) || mn(I)),
    c = ()=>e.map(I=>{
        if (he(I))
            return I.value;
        if (Ct(I))
            return ht(I);
        if (V(I))
            return nt(I, l, 2)
    }
    )) : V(e) ? t ? c = ()=>nt(e, l, 2) : c = ()=>{
        if (!(l && l.isUnmounted))
            return d && d(),
            ke(e, l, 3, [p])
    }
    : c = je,
    t && s) {
        const I = c;
        c = ()=>ht(I())
    }
    let d, p = I=>{
        d = A.onStop = ()=>{
            nt(I, l, 4)
        }
    }
    , _;
    if (Jt)
        if (p = je,
        t ? n && ke(t, l, 3, [c(), f ? [] : void 0, p]) : c(),
        r === "sync") {
            const I = ql();
            _ = I.__watcherHandles || (I.__watcherHandles = [])
        } else
            return je;
    let k = f ? new Array(e.length).fill(ln) : ln;
    const R = ()=>{
        if (!!A.active)
            if (t) {
                const I = A.run();
                (s || a || (f ? I.some((z,oe)=>zt(z, k[oe])) : zt(I, k))) && (d && d(),
                ke(t, l, 3, [I, k === ln ? void 0 : f && k[0] === ln ? [] : k, p]),
                k = I)
            } else
                A.run()
    }
    ;
    R.allowRecurse = !!t;
    let H;
    r === "sync" ? H = R : r === "post" ? H = ()=>we(R, l && l.suspense) : (R.pre = !0,
    l && (R.id = l.uid),
    H = ()=>ws(R));
    const A = new ps(c,H);
    t ? n ? R() : k = A.run() : r === "post" ? we(A.run.bind(A), l && l.suspense) : A.run();
    const j = ()=>{
        A.stop(),
        l && l.scope && as(l.scope.effects, A)
    }
    ;
    return _ && _.push(j),
    j
}
function Xi(e, t, n) {
    const s = this.proxy
      , r = ae(e) ? e.includes(".") ? io(s, e) : ()=>s[e] : e.bind(s, s);
    let o;
    V(t) ? o = t : (o = t.handler,
    n = t);
    const i = ce;
    Mt(this);
    const l = oo(r, o.bind(s), n);
    return i ? Mt(i) : mt(),
    l
}
function io(e, t) {
    const n = t.split(".");
    return ()=>{
        let s = e;
        for (let r = 0; r < n.length && s; r++)
            s = s[n[r]];
        return s
    }
}
function ht(e, t) {
    if (!ne(e) || e.__v_skip || (t = t || new Set,
    t.has(e)))
        return e;
    if (t.add(e),
    he(e))
        ht(e.value, t);
    else if (L(e))
        for (let n = 0; n < e.length; n++)
            ht(e[n], t);
    else if (Or(e) || wt(e))
        e.forEach(n=>{
            ht(n, t)
        }
        );
    else if (Tr(e))
        for (const n in e)
            ht(e[n], t);
    return e
}
function Zi() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Cs(()=>{
        e.isMounted = !0
    }
    ),
    ao(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const Me = [Function, Array]
  , Gi = {
    name: "BaseTransition",
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Me,
        onEnter: Me,
        onAfterEnter: Me,
        onEnterCancelled: Me,
        onBeforeLeave: Me,
        onLeave: Me,
        onAfterLeave: Me,
        onLeaveCancelled: Me,
        onBeforeAppear: Me,
        onAppear: Me,
        onAfterAppear: Me,
        onAppearCancelled: Me
    },
    setup(e, {slots: t}) {
        const n = Hl()
          , s = Zi();
        let r;
        return ()=>{
            const o = t.default && co(t.default(), !0);
            if (!o || !o.length)
                return;
            let i = o[0];
            if (o.length > 1) {
                for (const R of o)
                    if (R.type !== Ae) {
                        i = R;
                        break
                    }
            }
            const l = Q(e)
              , {mode: c} = l;
            if (s.isLeaving)
                return jn(i);
            const a = qs(i);
            if (!a)
                return jn(i);
            const f = Xn(a, l, s, n);
            Zn(a, f);
            const d = n.subTree
              , p = d && qs(d);
            let _ = !1;
            const {getTransitionKey: k} = a.type;
            if (k) {
                const R = k();
                r === void 0 ? r = R : R !== r && (r = R,
                _ = !0)
            }
            if (p && p.type !== Ae && (!ft(a, p) || _)) {
                const R = Xn(p, l, s, n);
                if (Zn(p, R),
                c === "out-in")
                    return s.isLeaving = !0,
                    R.afterLeave = ()=>{
                        s.isLeaving = !1,
                        n.update.active !== !1 && n.update()
                    }
                    ,
                    jn(i);
                c === "in-out" && a.type !== Ae && (R.delayLeave = (H,A,j)=>{
                    const I = lo(s, p);
                    I[String(p.key)] = p,
                    H._leaveCb = ()=>{
                        A(),
                        H._leaveCb = void 0,
                        delete f.delayedLeave
                    }
                    ,
                    f.delayedLeave = j
                }
                )
            }
            return i
        }
    }
}
  , el = Gi;
function lo(e, t) {
    const {leavingVNodes: n} = e;
    let s = n.get(t.type);
    return s || (s = Object.create(null),
    n.set(t.type, s)),
    s
}
function Xn(e, t, n, s) {
    const {appear: r, mode: o, persisted: i=!1, onBeforeEnter: l, onEnter: c, onAfterEnter: a, onEnterCancelled: f, onBeforeLeave: d, onLeave: p, onAfterLeave: _, onLeaveCancelled: k, onBeforeAppear: R, onAppear: H, onAfterAppear: A, onAppearCancelled: j} = t
      , I = String(e.key)
      , z = lo(n, e)
      , oe = (D,le)=>{
        D && ke(D, s, 9, le)
    }
      , ge = (D,le)=>{
        const se = le[1];
        oe(D, le),
        L(D) ? D.every(me=>me.length <= 1) && se() : D.length <= 1 && se()
    }
      , xe = {
        mode: o,
        persisted: i,
        beforeEnter(D) {
            let le = l;
            if (!n.isMounted)
                if (r)
                    le = R || l;
                else
                    return;
            D._leaveCb && D._leaveCb(!0);
            const se = z[I];
            se && ft(e, se) && se.el._leaveCb && se.el._leaveCb(),
            oe(le, [D])
        },
        enter(D) {
            let le = c
              , se = a
              , me = f;
            if (!n.isMounted)
                if (r)
                    le = H || c,
                    se = A || a,
                    me = j || f;
                else
                    return;
            let _e = !1;
            const Oe = D._enterCb = $e=>{
                _e || (_e = !0,
                $e ? oe(me, [D]) : oe(se, [D]),
                xe.delayedLeave && xe.delayedLeave(),
                D._enterCb = void 0)
            }
            ;
            le ? ge(le, [D, Oe]) : Oe()
        },
        leave(D, le) {
            const se = String(e.key);
            if (D._enterCb && D._enterCb(!0),
            n.isUnmounting)
                return le();
            oe(d, [D]);
            let me = !1;
            const _e = D._leaveCb = Oe=>{
                me || (me = !0,
                le(),
                Oe ? oe(k, [D]) : oe(_, [D]),
                D._leaveCb = void 0,
                z[se] === e && delete z[se])
            }
            ;
            z[se] = e,
            p ? ge(p, [D, _e]) : _e()
        },
        clone(D) {
            return Xn(D, t, n, s)
        }
    };
    return xe
}
function jn(e) {
    if (An(e))
        return e = rt(e),
        e.children = null,
        e
}
function qs(e) {
    return An(e) ? e.children ? e.children[0] : void 0 : e
}
function Zn(e, t) {
    e.shapeFlag & 6 && e.component ? Zn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function co(e, t=!1, n) {
    let s = []
      , r = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
        i.type === de ? (i.patchFlag & 128 && r++,
        s = s.concat(co(i.children, t, l))) : (t || i.type !== Ae) && s.push(l != null ? rt(i, {
            key: l
        }) : i)
    }
    if (r > 1)
        for (let o = 0; o < s.length; o++)
            s[o].patchFlag = -2;
    return s
}
function uo(e) {
    return V(e) ? {
        setup: e,
        name: e.name
    } : e
}
const Ut = e=>!!e.type.__asyncLoader
  , An = e=>e.type.__isKeepAlive;
function tl(e, t) {
    fo(e, "a", t)
}
function nl(e, t) {
    fo(e, "da", t)
}
function fo(e, t, n=ce) {
    const s = e.__wdc || (e.__wdc = ()=>{
        let r = n;
        for (; r; ) {
            if (r.isDeactivated)
                return;
            r = r.parent
        }
        return e()
    }
    );
    if (On(t, s, n),
    n) {
        let r = n.parent;
        for (; r && r.parent; )
            An(r.parent.vnode) && sl(s, t, n, r),
            r = r.parent
    }
}
function sl(e, t, n, s) {
    const r = On(t, e, s, !0);
    ho(()=>{
        as(s[t], r)
    }
    , n)
}
function On(e, t, n=ce, s=!1) {
    if (n) {
        const r = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...i)=>{
            if (n.isUnmounted)
                return;
            It(),
            Mt(n);
            const l = ke(t, n, e, i);
            return mt(),
            St(),
            l
        }
        );
        return s ? r.unshift(o) : r.push(o),
        o
    }
}
const Je = e=>(t,n=ce)=>(!Jt || e === "sp") && On(e, (...s)=>t(...s), n)
  , rl = Je("bm")
  , Cs = Je("m")
  , ol = Je("bu")
  , il = Je("u")
  , ao = Je("bum")
  , ho = Je("um")
  , ll = Je("sp")
  , cl = Je("rtg")
  , ul = Je("rtc");
function fl(e, t=ce) {
    On("ec", e, t)
}
function Ps(e, t) {
    const n = pe;
    if (n === null)
        return e;
    const s = Tn(n) || n.proxy
      , r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let[i,l,c,a=re] = t[o];
        i && (V(i) && (i = {
            mounted: i,
            updated: i
        }),
        i.deep && ht(l),
        r.push({
            dir: i,
            instance: s,
            value: l,
            oldValue: void 0,
            arg: c,
            modifiers: a
        }))
    }
    return e
}
function it(e, t, n, s) {
    const r = e.dirs
      , o = t && t.dirs;
    for (let i = 0; i < r.length; i++) {
        const l = r[i];
        o && (l.oldValue = o[i].value);
        let c = l.dir[s];
        c && (It(),
        ke(c, n, 8, [e.el, l, e, t]),
        St())
    }
}
const po = "components";
function Ft(e, t) {
    return dl(po, e, !0, t) || e
}
const al = Symbol();
function dl(e, t, n=!0, s=!1) {
    const r = pe || ce;
    if (r) {
        const o = r.type;
        if (e === po) {
            const l = Kl(o, !1);
            if (l && (l === t || l === Ke(t) || l === Pn(Ke(t))))
                return o
        }
        const i = Ws(r[e] || o[e], t) || Ws(r.appContext[e], t);
        return !i && s ? o : i
    }
}
function Ws(e, t) {
    return e && (e[t] || e[Ke(t)] || e[Pn(Ke(t))])
}
function cn(e, t, n, s) {
    let r;
    const o = n && n[s];
    if (L(e) || ae(e)) {
        r = new Array(e.length);
        for (let i = 0, l = e.length; i < l; i++)
            r[i] = t(e[i], i, void 0, o && o[i])
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let i = 0; i < e; i++)
            r[i] = t(i + 1, i, void 0, o && o[i])
    } else if (ne(e))
        if (e[Symbol.iterator])
            r = Array.from(e, (i,l)=>t(i, l, void 0, o && o[l]));
        else {
            const i = Object.keys(e);
            r = new Array(i.length);
            for (let l = 0, c = i.length; l < c; l++) {
                const a = i[l];
                r[l] = t(e[a], a, l, o && o[l])
            }
        }
    else
        r = [];
    return n && (n[s] = r),
    r
}
function hl(e, t, n={}, s, r) {
    if (pe.isCE || pe.parent && Ut(pe.parent) && pe.parent.isCE)
        return t !== "default" && (n.name = t),
        F("slot", n, s && s());
    let o = e[t];
    o && o._c && (o._d = !1),
    Y();
    const i = o && go(o(n))
      , l = Po(de, {
        key: n.key || i && i.key || `_${t}`
    }, i || (s ? s() : []), i && e._ === 1 ? 64 : -2);
    return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    l
}
function go(e) {
    return e.some(t=>bn(t) ? !(t.type === Ae || t.type === de && !go(t.children)) : !0) ? e : null
}
const Gn = e=>e ? ko(e) ? Tn(e) || e.proxy : Gn(e.parent) : null
  , Bt = be(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>Gn(e.parent),
    $root: e=>Gn(e.root),
    $emit: e=>e.emit,
    $options: e=>Rs(e),
    $forceUpdate: e=>e.f || (e.f = ()=>ws(e.update)),
    $nextTick: e=>e.n || (e.n = Gr.bind(e.proxy)),
    $watch: e=>Xi.bind(e)
})
  , Hn = (e,t)=>e !== re && !e.__isScriptSetup && W(e, t)
  , pl = {
    get({_: e}, t) {
        const {ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: c} = e;
        let a;
        if (t[0] !== "$") {
            const _ = i[t];
            if (_ !== void 0)
                switch (_) {
                case 1:
                    return s[t];
                case 2:
                    return r[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (Hn(s, t))
                    return i[t] = 1,
                    s[t];
                if (r !== re && W(r, t))
                    return i[t] = 2,
                    r[t];
                if ((a = e.propsOptions[0]) && W(a, t))
                    return i[t] = 3,
                    o[t];
                if (n !== re && W(n, t))
                    return i[t] = 4,
                    n[t];
                es && (i[t] = 0)
            }
        }
        const f = Bt[t];
        let d, p;
        if (f)
            return t === "$attrs" && Ce(e, "get", t),
            f(e);
        if ((d = l.__cssModules) && (d = d[t]))
            return d;
        if (n !== re && W(n, t))
            return i[t] = 4,
            n[t];
        if (p = c.config.globalProperties,
        W(p, t))
            return p[t]
    },
    set({_: e}, t, n) {
        const {data: s, setupState: r, ctx: o} = e;
        return Hn(r, t) ? (r[t] = n,
        !0) : s !== re && W(s, t) ? (s[t] = n,
        !0) : W(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o}}, i) {
        let l;
        return !!n[i] || e !== re && W(e, i) || Hn(t, i) || (l = o[0]) && W(l, i) || W(s, i) || W(Bt, i) || W(r.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : W(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
let es = !0;
function gl(e) {
    const t = Rs(e)
      , n = e.proxy
      , s = e.ctx;
    es = !1,
    t.beforeCreate && Qs(t.beforeCreate, e, "bc");
    const {data: r, computed: o, methods: i, watch: l, provide: c, inject: a, created: f, beforeMount: d, mounted: p, beforeUpdate: _, updated: k, activated: R, deactivated: H, beforeDestroy: A, beforeUnmount: j, destroyed: I, unmounted: z, render: oe, renderTracked: ge, renderTriggered: xe, errorCaptured: D, serverPrefetch: le, expose: se, inheritAttrs: me, components: _e, directives: Oe, filters: $e} = t;
    if (a && ml(a, s, null, e.appContext.config.unwrapInjectedRef),
    i)
        for (const ee in i) {
            const X = i[ee];
            V(X) && (s[ee] = X.bind(n))
        }
    if (r) {
        const ee = r.call(n, n);
        ne(ee) && (e.data = Gt(ee))
    }
    if (es = !0,
    o)
        for (const ee in o) {
            const X = o[ee]
              , Ie = V(X) ? X.bind(n, n) : V(X.get) ? X.get.bind(n, n) : je
              , ot = !V(X) && V(X.set) ? X.set.bind(n) : je
              , Se = Re({
                get: Ie,
                set: ot
            });
            Object.defineProperty(s, ee, {
                enumerable: !0,
                configurable: !0,
                get: ()=>Se.value,
                set: Ee=>Se.value = Ee
            })
        }
    if (l)
        for (const ee in l)
            mo(l[ee], s, n, ee);
    if (c) {
        const ee = V(c) ? c.call(n) : c;
        Reflect.ownKeys(ee).forEach(X=>{
            an(X, ee[X])
        }
        )
    }
    f && Qs(f, e, "c");
    function ue(ee, X) {
        L(X) ? X.forEach(Ie=>ee(Ie.bind(n))) : X && ee(X.bind(n))
    }
    if (ue(rl, d),
    ue(Cs, p),
    ue(ol, _),
    ue(il, k),
    ue(tl, R),
    ue(nl, H),
    ue(fl, D),
    ue(ul, ge),
    ue(cl, xe),
    ue(ao, j),
    ue(ho, z),
    ue(ll, le),
    L(se))
        if (se.length) {
            const ee = e.exposed || (e.exposed = {});
            se.forEach(X=>{
                Object.defineProperty(ee, X, {
                    get: ()=>n[X],
                    set: Ie=>n[X] = Ie
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    oe && e.render === je && (e.render = oe),
    me != null && (e.inheritAttrs = me),
    _e && (e.components = _e),
    Oe && (e.directives = Oe)
}
function ml(e, t, n=je, s=!1) {
    L(e) && (e = ts(e));
    for (const r in e) {
        const o = e[r];
        let i;
        ne(o) ? "default"in o ? i = Qe(o.from || r, o.default, !0) : i = Qe(o.from || r) : i = Qe(o),
        he(i) && s ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: ()=>i.value,
            set: l=>i.value = l
        }) : t[r] = i
    }
}
function Qs(e, t, n) {
    ke(L(e) ? e.map(s=>s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function mo(e, t, n, s) {
    const r = s.includes(".") ? io(n, s) : ()=>n[s];
    if (ae(e)) {
        const o = t[e];
        V(o) && dn(r, o)
    } else if (V(e))
        dn(r, e.bind(n));
    else if (ne(e))
        if (L(e))
            e.forEach(o=>mo(o, t, n, s));
        else {
            const o = V(e.handler) ? e.handler.bind(n) : t[e.handler];
            V(o) && dn(r, o, e)
        }
}
function Rs(e) {
    const t = e.type
      , {mixins: n, extends: s} = t
      , {mixins: r, optionsCache: o, config: {optionMergeStrategies: i}} = e.appContext
      , l = o.get(t);
    let c;
    return l ? c = l : !r.length && !n && !s ? c = t : (c = {},
    r.length && r.forEach(a=>yn(c, a, i, !0)),
    yn(c, t, i)),
    ne(t) && o.set(t, c),
    c
}
function yn(e, t, n, s=!1) {
    const {mixins: r, extends: o} = t;
    o && yn(e, o, n, !0),
    r && r.forEach(i=>yn(e, i, n, !0));
    for (const i in t)
        if (!(s && i === "expose")) {
            const l = _l[i] || n && n[i];
            e[i] = l ? l(e[i], t[i]) : t[i]
        }
    return e
}
const _l = {
    data: Ys,
    props: ct,
    emits: ct,
    methods: ct,
    computed: ct,
    beforeCreate: ve,
    created: ve,
    beforeMount: ve,
    mounted: ve,
    beforeUpdate: ve,
    updated: ve,
    beforeDestroy: ve,
    beforeUnmount: ve,
    destroyed: ve,
    unmounted: ve,
    activated: ve,
    deactivated: ve,
    errorCaptured: ve,
    serverPrefetch: ve,
    components: ct,
    directives: ct,
    watch: bl,
    provide: Ys,
    inject: yl
};
function Ys(e, t) {
    return t ? e ? function() {
        return be(V(e) ? e.call(this, this) : e, V(t) ? t.call(this, this) : t)
    }
    : t : e
}
function yl(e, t) {
    return ct(ts(e), ts(t))
}
function ts(e) {
    if (L(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function ve(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function ct(e, t) {
    return e ? be(be(Object.create(null), e), t) : t
}
function bl(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = be(Object.create(null), e);
    for (const s in t)
        n[s] = ve(e[s], t[s]);
    return n
}
function vl(e, t, n, s=!1) {
    const r = {}
      , o = {};
    gn(o, Sn, 1),
    e.propsDefaults = Object.create(null),
    _o(e, t, r, o);
    for (const i in e.propsOptions[0])
        i in r || (r[i] = void 0);
    n ? e.props = s ? r : Si(r) : e.type.props ? e.props = r : e.props = o,
    e.attrs = o
}
function xl(e, t, n, s) {
    const {props: r, attrs: o, vnode: {patchFlag: i}} = e
      , l = Q(r)
      , [c] = e.propsOptions;
    let a = !1;
    if ((s || i > 0) && !(i & 16)) {
        if (i & 8) {
            const f = e.vnode.dynamicProps;
            for (let d = 0; d < f.length; d++) {
                let p = f[d];
                if (kn(e.emitsOptions, p))
                    continue;
                const _ = t[p];
                if (c)
                    if (W(o, p))
                        _ !== o[p] && (o[p] = _,
                        a = !0);
                    else {
                        const k = Ke(p);
                        r[k] = ns(c, l, k, _, e, !1)
                    }
                else
                    _ !== o[p] && (o[p] = _,
                    a = !0)
            }
        }
    } else {
        _o(e, t, r, o) && (a = !0);
        let f;
        for (const d in l)
            (!t || !W(t, d) && ((f = Ot(d)) === d || !W(t, f))) && (c ? n && (n[d] !== void 0 || n[f] !== void 0) && (r[d] = ns(c, l, d, void 0, e, !0)) : delete r[d]);
        if (o !== l)
            for (const d in o)
                (!t || !W(t, d) && !0) && (delete o[d],
                a = !0)
    }
    a && Ye(e, "set", "$attrs")
}
function _o(e, t, n, s) {
    const [r,o] = e.propsOptions;
    let i = !1, l;
    if (t)
        for (let c in t) {
            if (un(c))
                continue;
            const a = t[c];
            let f;
            r && W(r, f = Ke(c)) ? !o || !o.includes(f) ? n[f] = a : (l || (l = {}))[f] = a : kn(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a,
            i = !0)
        }
    if (o) {
        const c = Q(n)
          , a = l || re;
        for (let f = 0; f < o.length; f++) {
            const d = o[f];
            n[d] = ns(r, c, d, a[d], e, !W(a, d))
        }
    }
    return i
}
function ns(e, t, n, s, r, o) {
    const i = e[n];
    if (i != null) {
        const l = W(i, "default");
        if (l && s === void 0) {
            const c = i.default;
            if (i.type !== Function && V(c)) {
                const {propsDefaults: a} = r;
                n in a ? s = a[n] : (Mt(r),
                s = a[n] = c.call(null, t),
                mt())
            } else
                s = c
        }
        i[0] && (o && !l ? s = !1 : i[1] && (s === "" || s === Ot(n)) && (s = !0))
    }
    return s
}
function yo(e, t, n=!1) {
    const s = t.propsCache
      , r = s.get(e);
    if (r)
        return r;
    const o = e.props
      , i = {}
      , l = [];
    let c = !1;
    if (!V(e)) {
        const f = d=>{
            c = !0;
            const [p,_] = yo(d, t, !0);
            be(i, p),
            _ && l.push(..._)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(f),
        e.extends && f(e.extends),
        e.mixins && e.mixins.forEach(f)
    }
    if (!o && !c)
        return ne(e) && s.set(e, Et),
        Et;
    if (L(o))
        for (let f = 0; f < o.length; f++) {
            const d = Ke(o[f]);
            Js(d) && (i[d] = re)
        }
    else if (o)
        for (const f in o) {
            const d = Ke(f);
            if (Js(d)) {
                const p = o[f]
                  , _ = i[d] = L(p) || V(p) ? {
                    type: p
                } : Object.assign({}, p);
                if (_) {
                    const k = Gs(Boolean, _.type)
                      , R = Gs(String, _.type);
                    _[0] = k > -1,
                    _[1] = R < 0 || k < R,
                    (k > -1 || W(_, "default")) && l.push(d)
                }
            }
        }
    const a = [i, l];
    return ne(e) && s.set(e, a),
    a
}
function Js(e) {
    return e[0] !== "$"
}
function Xs(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}
function Zs(e, t) {
    return Xs(e) === Xs(t)
}
function Gs(e, t) {
    return L(t) ? t.findIndex(n=>Zs(n, e)) : V(t) && Zs(t, e) ? 0 : -1
}
const bo = e=>e[0] === "_" || e === "$stable"
  , Ms = e=>L(e) ? e.map(Ve) : [Ve(e)]
  , El = (e,t,n)=>{
    if (t._n)
        return t;
    const s = $i((...r)=>Ms(t(...r)), n);
    return s._c = !1,
    s
}
  , vo = (e,t,n)=>{
    const s = e._ctx;
    for (const r in e) {
        if (bo(r))
            continue;
        const o = e[r];
        if (V(o))
            t[r] = El(r, o, s);
        else if (o != null) {
            const i = Ms(o);
            t[r] = ()=>i
        }
    }
}
  , xo = (e,t)=>{
    const n = Ms(t);
    e.slots.default = ()=>n
}
  , wl = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = Q(t),
        gn(t, "_", n)) : vo(t, e.slots = {})
    } else
        e.slots = {},
        t && xo(e, t);
    gn(e.slots, Sn, 1)
}
  , Cl = (e,t,n)=>{
    const {vnode: s, slots: r} = e;
    let o = !0
      , i = re;
    if (s.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? o = !1 : (be(r, t),
        !n && l === 1 && delete r._) : (o = !t.$stable,
        vo(t, r)),
        i = t
    } else
        t && (xo(e, t),
        i = {
            default: 1
        });
    if (o)
        for (const l in r)
            !bo(l) && !(l in i) && delete r[l]
}
;
function Eo() {
    return {
        app: null,
        config: {
            isNativeTag: Jo,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Pl = 0;
function Rl(e, t) {
    return function(s, r=null) {
        V(s) || (s = Object.assign({}, s)),
        r != null && !ne(r) && (r = null);
        const o = Eo()
          , i = new Set;
        let l = !1;
        const c = o.app = {
            _uid: Pl++,
            _component: s,
            _props: r,
            _container: null,
            _context: o,
            _instance: null,
            version: Wl,
            get config() {
                return o.config
            },
            set config(a) {},
            use(a, ...f) {
                return i.has(a) || (a && V(a.install) ? (i.add(a),
                a.install(c, ...f)) : V(a) && (i.add(a),
                a(c, ...f))),
                c
            },
            mixin(a) {
                return o.mixins.includes(a) || o.mixins.push(a),
                c
            },
            component(a, f) {
                return f ? (o.components[a] = f,
                c) : o.components[a]
            },
            directive(a, f) {
                return f ? (o.directives[a] = f,
                c) : o.directives[a]
            },
            mount(a, f, d) {
                if (!l) {
                    const p = F(s, r);
                    return p.appContext = o,
                    f && t ? t(p, a) : e(p, a, d),
                    l = !0,
                    c._container = a,
                    a.__vue_app__ = c,
                    Tn(p.component) || p.component.proxy
                }
            },
            unmount() {
                l && (e(null, c._container),
                delete c._container.__vue_app__)
            },
            provide(a, f) {
                return o.provides[a] = f,
                c
            }
        };
        return c
    }
}
function ss(e, t, n, s, r=!1) {
    if (L(e)) {
        e.forEach((p,_)=>ss(p, t && (L(t) ? t[_] : t), n, s, r));
        return
    }
    if (Ut(s) && !r)
        return;
    const o = s.shapeFlag & 4 ? Tn(s.component) || s.component.proxy : s.el
      , i = r ? null : o
      , {i: l, r: c} = e
      , a = t && t.r
      , f = l.refs === re ? l.refs = {} : l.refs
      , d = l.setupState;
    if (a != null && a !== c && (ae(a) ? (f[a] = null,
    W(d, a) && (d[a] = null)) : he(a) && (a.value = null)),
    V(c))
        nt(c, l, 12, [i, f]);
    else {
        const p = ae(c)
          , _ = he(c);
        if (p || _) {
            const k = ()=>{
                if (e.f) {
                    const R = p ? W(d, c) ? d[c] : f[c] : c.value;
                    r ? L(R) && as(R, o) : L(R) ? R.includes(o) || R.push(o) : p ? (f[c] = [o],
                    W(d, c) && (d[c] = f[c])) : (c.value = [o],
                    e.k && (f[e.k] = c.value))
                } else
                    p ? (f[c] = i,
                    W(d, c) && (d[c] = i)) : _ && (c.value = i,
                    e.k && (f[e.k] = i))
            }
            ;
            i ? (k.id = -1,
            we(k, n)) : k()
        }
    }
}
const we = Ji;
function Ml(e) {
    return kl(e)
}
function kl(e, t) {
    const n = ni();
    n.__VUE__ = !0;
    const {insert: s, remove: r, patchProp: o, createElement: i, createText: l, createComment: c, setText: a, setElementText: f, parentNode: d, nextSibling: p, setScopeId: _=je, insertStaticContent: k} = e
      , R = (u,h,g,m=null,b=null,E=null,P=!1,x=null,w=!!h.dynamicChildren)=>{
        if (u === h)
            return;
        u && !ft(u, h) && (m = C(u),
        Ee(u, b, E, !0),
        u = null),
        h.patchFlag === -2 && (w = !1,
        h.dynamicChildren = null);
        const {type: v, ref: T, shapeFlag: O} = h;
        switch (v) {
        case In:
            H(u, h, g, m);
            break;
        case Ae:
            A(u, h, g, m);
            break;
        case Un:
            u == null && j(h, g, m, P);
            break;
        case de:
            _e(u, h, g, m, b, E, P, x, w);
            break;
        default:
            O & 1 ? oe(u, h, g, m, b, E, P, x, w) : O & 6 ? Oe(u, h, g, m, b, E, P, x, w) : (O & 64 || O & 128) && v.process(u, h, g, m, b, E, P, x, w, q)
        }
        T != null && b && ss(T, u && u.ref, E, h || u, !h)
    }
      , H = (u,h,g,m)=>{
        if (u == null)
            s(h.el = l(h.children), g, m);
        else {
            const b = h.el = u.el;
            h.children !== u.children && a(b, h.children)
        }
    }
      , A = (u,h,g,m)=>{
        u == null ? s(h.el = c(h.children || ""), g, m) : h.el = u.el
    }
      , j = (u,h,g,m)=>{
        [u.el,u.anchor] = k(u.children, h, g, m, u.el, u.anchor)
    }
      , I = ({el: u, anchor: h},g,m)=>{
        let b;
        for (; u && u !== h; )
            b = p(u),
            s(u, g, m),
            u = b;
        s(h, g, m)
    }
      , z = ({el: u, anchor: h})=>{
        let g;
        for (; u && u !== h; )
            g = p(u),
            r(u),
            u = g;
        r(h)
    }
      , oe = (u,h,g,m,b,E,P,x,w)=>{
        P = P || h.type === "svg",
        u == null ? ge(h, g, m, b, E, P, x, w) : le(u, h, b, E, P, x, w)
    }
      , ge = (u,h,g,m,b,E,P,x)=>{
        let w, v;
        const {type: T, props: O, shapeFlag: N, transition: U, dirs: $} = u;
        if (w = u.el = i(u.type, E, O && O.is, O),
        N & 8 ? f(w, u.children) : N & 16 && D(u.children, w, null, m, b, E && T !== "foreignObject", P, x),
        $ && it(u, null, m, "created"),
        xe(w, u, u.scopeId, P, m),
        O) {
            for (const Z in O)
                Z !== "value" && !un(Z) && o(w, Z, null, O[Z], E, u.children, m, b, M);
            "value"in O && o(w, "value", null, O.value),
            (v = O.onVnodeBeforeMount) && Be(v, m, u)
        }
        $ && it(u, null, m, "beforeMount");
        const te = (!b || b && !b.pendingBranch) && U && !U.persisted;
        te && U.beforeEnter(w),
        s(w, h, g),
        ((v = O && O.onVnodeMounted) || te || $) && we(()=>{
            v && Be(v, m, u),
            te && U.enter(w),
            $ && it(u, null, m, "mounted")
        }
        , b)
    }
      , xe = (u,h,g,m,b)=>{
        if (g && _(u, g),
        m)
            for (let E = 0; E < m.length; E++)
                _(u, m[E]);
        if (b) {
            let E = b.subTree;
            if (h === E) {
                const P = b.vnode;
                xe(u, P, P.scopeId, P.slotScopeIds, b.parent)
            }
        }
    }
      , D = (u,h,g,m,b,E,P,x,w=0)=>{
        for (let v = w; v < u.length; v++) {
            const T = u[v] = x ? Ge(u[v]) : Ve(u[v]);
            R(null, T, h, g, m, b, E, P, x)
        }
    }
      , le = (u,h,g,m,b,E,P)=>{
        const x = h.el = u.el;
        let {patchFlag: w, dynamicChildren: v, dirs: T} = h;
        w |= u.patchFlag & 16;
        const O = u.props || re
          , N = h.props || re;
        let U;
        g && lt(g, !1),
        (U = N.onVnodeBeforeUpdate) && Be(U, g, h, u),
        T && it(h, u, g, "beforeUpdate"),
        g && lt(g, !0);
        const $ = b && h.type !== "foreignObject";
        if (v ? se(u.dynamicChildren, v, x, g, m, $, E) : P || X(u, h, x, null, g, m, $, E, !1),
        w > 0) {
            if (w & 16)
                me(x, h, O, N, g, m, b);
            else if (w & 2 && O.class !== N.class && o(x, "class", null, N.class, b),
            w & 4 && o(x, "style", O.style, N.style, b),
            w & 8) {
                const te = h.dynamicProps;
                for (let Z = 0; Z < te.length; Z++) {
                    const fe = te[Z]
                      , Te = O[fe]
                      , yt = N[fe];
                    (yt !== Te || fe === "value") && o(x, fe, Te, yt, b, u.children, g, m, M)
                }
            }
            w & 1 && u.children !== h.children && f(x, h.children)
        } else
            !P && v == null && me(x, h, O, N, g, m, b);
        ((U = N.onVnodeUpdated) || T) && we(()=>{
            U && Be(U, g, h, u),
            T && it(h, u, g, "updated")
        }
        , m)
    }
      , se = (u,h,g,m,b,E,P)=>{
        for (let x = 0; x < h.length; x++) {
            const w = u[x]
              , v = h[x]
              , T = w.el && (w.type === de || !ft(w, v) || w.shapeFlag & 70) ? d(w.el) : g;
            R(w, v, T, null, m, b, E, P, !0)
        }
    }
      , me = (u,h,g,m,b,E,P)=>{
        if (g !== m) {
            if (g !== re)
                for (const x in g)
                    !un(x) && !(x in m) && o(u, x, g[x], null, P, h.children, b, E, M);
            for (const x in m) {
                if (un(x))
                    continue;
                const w = m[x]
                  , v = g[x];
                w !== v && x !== "value" && o(u, x, v, w, P, h.children, b, E, M)
            }
            "value"in m && o(u, "value", g.value, m.value)
        }
    }
      , _e = (u,h,g,m,b,E,P,x,w)=>{
        const v = h.el = u ? u.el : l("")
          , T = h.anchor = u ? u.anchor : l("");
        let {patchFlag: O, dynamicChildren: N, slotScopeIds: U} = h;
        U && (x = x ? x.concat(U) : U),
        u == null ? (s(v, g, m),
        s(T, g, m),
        D(h.children, g, T, b, E, P, x, w)) : O > 0 && O & 64 && N && u.dynamicChildren ? (se(u.dynamicChildren, N, g, b, E, P, x),
        (h.key != null || b && h === b.subTree) && wo(u, h, !0)) : X(u, h, g, T, b, E, P, x, w)
    }
      , Oe = (u,h,g,m,b,E,P,x,w)=>{
        h.slotScopeIds = x,
        u == null ? h.shapeFlag & 512 ? b.ctx.activate(h, g, m, P, w) : $e(h, g, m, b, E, P, w) : Tt(u, h, w)
    }
      , $e = (u,h,g,m,b,E,P)=>{
        const x = u.component = jl(u, m, b);
        if (An(u) && (x.ctx.renderer = q),
        Ul(x),
        x.asyncDep) {
            if (b && b.registerDep(x, ue),
            !u.el) {
                const w = x.subTree = F(Ae);
                A(null, w, h, g)
            }
            return
        }
        ue(x, u, h, g, b, E, P)
    }
      , Tt = (u,h,g)=>{
        const m = h.component = u.component;
        if (Wi(u, h, g))
            if (m.asyncDep && !m.asyncResolved) {
                ee(m, h, g);
                return
            } else
                m.next = h,
                Bi(m.update),
                m.update();
        else
            h.el = u.el,
            m.vnode = h
    }
      , ue = (u,h,g,m,b,E,P)=>{
        const x = ()=>{
            if (u.isMounted) {
                let {next: T, bu: O, u: N, parent: U, vnode: $} = u, te = T, Z;
                lt(u, !1),
                T ? (T.el = $.el,
                ee(u, T, P)) : T = $,
                O && fn(O),
                (Z = T.props && T.props.onVnodeBeforeUpdate) && Be(Z, U, T, $),
                lt(u, !0);
                const fe = Ln(u)
                  , Te = u.subTree;
                u.subTree = fe,
                R(Te, fe, d(Te.el), C(Te), u, b, E),
                T.el = fe.el,
                te === null && Qi(u, fe.el),
                N && we(N, b),
                (Z = T.props && T.props.onVnodeUpdated) && we(()=>Be(Z, U, T, $), b)
            } else {
                let T;
                const {el: O, props: N} = h
                  , {bm: U, m: $, parent: te} = u
                  , Z = Ut(h);
                if (lt(u, !1),
                U && fn(U),
                !Z && (T = N && N.onVnodeBeforeMount) && Be(T, te, h),
                lt(u, !0),
                O && K) {
                    const fe = ()=>{
                        u.subTree = Ln(u),
                        K(O, u.subTree, u, b, null)
                    }
                    ;
                    Z ? h.type.__asyncLoader().then(()=>!u.isUnmounted && fe()) : fe()
                } else {
                    const fe = u.subTree = Ln(u);
                    R(null, fe, g, m, u, b, E),
                    h.el = fe.el
                }
                if ($ && we($, b),
                !Z && (T = N && N.onVnodeMounted)) {
                    const fe = h;
                    we(()=>Be(T, te, fe), b)
                }
                (h.shapeFlag & 256 || te && Ut(te.vnode) && te.vnode.shapeFlag & 256) && u.a && we(u.a, b),
                u.isMounted = !0,
                h = g = m = null
            }
        }
          , w = u.effect = new ps(x,()=>ws(v),u.scope)
          , v = u.update = ()=>w.run();
        v.id = u.uid,
        lt(u, !0),
        v()
    }
      , ee = (u,h,g)=>{
        h.component = u;
        const m = u.vnode.props;
        u.vnode = h,
        u.next = null,
        xl(u, h.props, m, g),
        Cl(u, h.children, g),
        It(),
        $s(),
        St()
    }
      , X = (u,h,g,m,b,E,P,x,w=!1)=>{
        const v = u && u.children
          , T = u ? u.shapeFlag : 0
          , O = h.children
          , {patchFlag: N, shapeFlag: U} = h;
        if (N > 0) {
            if (N & 128) {
                ot(v, O, g, m, b, E, P, x, w);
                return
            } else if (N & 256) {
                Ie(v, O, g, m, b, E, P, x, w);
                return
            }
        }
        U & 8 ? (T & 16 && M(v, b, E),
        O !== v && f(g, O)) : T & 16 ? U & 16 ? ot(v, O, g, m, b, E, P, x, w) : M(v, b, E, !0) : (T & 8 && f(g, ""),
        U & 16 && D(O, g, m, b, E, P, x, w))
    }
      , Ie = (u,h,g,m,b,E,P,x,w)=>{
        u = u || Et,
        h = h || Et;
        const v = u.length
          , T = h.length
          , O = Math.min(v, T);
        let N;
        for (N = 0; N < O; N++) {
            const U = h[N] = w ? Ge(h[N]) : Ve(h[N]);
            R(u[N], U, g, null, b, E, P, x, w)
        }
        v > T ? M(u, b, E, !0, !1, O) : D(h, g, m, b, E, P, x, w, O)
    }
      , ot = (u,h,g,m,b,E,P,x,w)=>{
        let v = 0;
        const T = h.length;
        let O = u.length - 1
          , N = T - 1;
        for (; v <= O && v <= N; ) {
            const U = u[v]
              , $ = h[v] = w ? Ge(h[v]) : Ve(h[v]);
            if (ft(U, $))
                R(U, $, g, null, b, E, P, x, w);
            else
                break;
            v++
        }
        for (; v <= O && v <= N; ) {
            const U = u[O]
              , $ = h[N] = w ? Ge(h[N]) : Ve(h[N]);
            if (ft(U, $))
                R(U, $, g, null, b, E, P, x, w);
            else
                break;
            O--,
            N--
        }
        if (v > O) {
            if (v <= N) {
                const U = N + 1
                  , $ = U < T ? h[U].el : m;
                for (; v <= N; )
                    R(null, h[v] = w ? Ge(h[v]) : Ve(h[v]), g, $, b, E, P, x, w),
                    v++
            }
        } else if (v > N)
            for (; v <= O; )
                Ee(u[v], b, E, !0),
                v++;
        else {
            const U = v
              , $ = v
              , te = new Map;
            for (v = $; v <= N; v++) {
                const Pe = h[v] = w ? Ge(h[v]) : Ve(h[v]);
                Pe.key != null && te.set(Pe.key, v)
            }
            let Z, fe = 0;
            const Te = N - $ + 1;
            let yt = !1
              , Ss = 0;
            const Nt = new Array(Te);
            for (v = 0; v < Te; v++)
                Nt[v] = 0;
            for (v = U; v <= O; v++) {
                const Pe = u[v];
                if (fe >= Te) {
                    Ee(Pe, b, E, !0);
                    continue
                }
                let Ue;
                if (Pe.key != null)
                    Ue = te.get(Pe.key);
                else
                    for (Z = $; Z <= N; Z++)
                        if (Nt[Z - $] === 0 && ft(Pe, h[Z])) {
                            Ue = Z;
                            break
                        }
                Ue === void 0 ? Ee(Pe, b, E, !0) : (Nt[Ue - $] = v + 1,
                Ue >= Ss ? Ss = Ue : yt = !0,
                R(Pe, h[Ue], g, null, b, E, P, x, w),
                fe++)
            }
            const Ts = yt ? Al(Nt) : Et;
            for (Z = Ts.length - 1,
            v = Te - 1; v >= 0; v--) {
                const Pe = $ + v
                  , Ue = h[Pe]
                  , Ns = Pe + 1 < T ? h[Pe + 1].el : m;
                Nt[v] === 0 ? R(null, Ue, g, Ns, b, E, P, x, w) : yt && (Z < 0 || v !== Ts[Z] ? Se(Ue, g, Ns, 2) : Z--)
            }
        }
    }
      , Se = (u,h,g,m,b=null)=>{
        const {el: E, type: P, transition: x, children: w, shapeFlag: v} = u;
        if (v & 6) {
            Se(u.component.subTree, h, g, m);
            return
        }
        if (v & 128) {
            u.suspense.move(h, g, m);
            return
        }
        if (v & 64) {
            P.move(u, h, g, q);
            return
        }
        if (P === de) {
            s(E, h, g);
            for (let O = 0; O < w.length; O++)
                Se(w[O], h, g, m);
            s(u.anchor, h, g);
            return
        }
        if (P === Un) {
            I(u, h, g);
            return
        }
        if (m !== 2 && v & 1 && x)
            if (m === 0)
                x.beforeEnter(E),
                s(E, h, g),
                we(()=>x.enter(E), b);
            else {
                const {leave: O, delayLeave: N, afterLeave: U} = x
                  , $ = ()=>s(E, h, g)
                  , te = ()=>{
                    O(E, ()=>{
                        $(),
                        U && U()
                    }
                    )
                }
                ;
                N ? N(E, $, te) : te()
            }
        else
            s(E, h, g)
    }
      , Ee = (u,h,g,m=!1,b=!1)=>{
        const {type: E, props: P, ref: x, children: w, dynamicChildren: v, shapeFlag: T, patchFlag: O, dirs: N} = u;
        if (x != null && ss(x, null, g, u, !0),
        T & 256) {
            h.ctx.deactivate(u);
            return
        }
        const U = T & 1 && N
          , $ = !Ut(u);
        let te;
        if ($ && (te = P && P.onVnodeBeforeUnmount) && Be(te, h, u),
        T & 6)
            y(u.component, g, m);
        else {
            if (T & 128) {
                u.suspense.unmount(g, m);
                return
            }
            U && it(u, null, h, "beforeUnmount"),
            T & 64 ? u.type.remove(u, h, g, b, q, m) : v && (E !== de || O > 0 && O & 64) ? M(v, h, g, !1, !0) : (E === de && O & 384 || !b && T & 16) && M(w, h, g),
            m && _t(u)
        }
        ($ && (te = P && P.onVnodeUnmounted) || U) && we(()=>{
            te && Be(te, h, u),
            U && it(u, null, h, "unmounted")
        }
        , g)
    }
      , _t = u=>{
        const {type: h, el: g, anchor: m, transition: b} = u;
        if (h === de) {
            en(g, m);
            return
        }
        if (h === Un) {
            z(u);
            return
        }
        const E = ()=>{
            r(g),
            b && !b.persisted && b.afterLeave && b.afterLeave()
        }
        ;
        if (u.shapeFlag & 1 && b && !b.persisted) {
            const {leave: P, delayLeave: x} = b
              , w = ()=>P(g, E);
            x ? x(u.el, E, w) : w()
        } else
            E()
    }
      , en = (u,h)=>{
        let g;
        for (; u !== h; )
            g = p(u),
            r(u),
            u = g;
        r(h)
    }
      , y = (u,h,g)=>{
        const {bum: m, scope: b, update: E, subTree: P, um: x} = u;
        m && fn(m),
        b.stop(),
        E && (E.active = !1,
        Ee(P, u, h, g)),
        x && we(x, h),
        we(()=>{
            u.isUnmounted = !0
        }
        , h),
        h && h.pendingBranch && !h.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === h.pendingId && (h.deps--,
        h.deps === 0 && h.resolve())
    }
      , M = (u,h,g,m=!1,b=!1,E=0)=>{
        for (let P = E; P < u.length; P++)
            Ee(u[P], h, g, m, b)
    }
      , C = u=>u.shapeFlag & 6 ? C(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : p(u.anchor || u.el)
      , S = (u,h,g)=>{
        u == null ? h._vnode && Ee(h._vnode, null, null, !0) : R(h._vnode || null, u, h, null, null, null, g),
        $s(),
        to(),
        h._vnode = u
    }
      , q = {
        p: R,
        um: Ee,
        m: Se,
        r: _t,
        mt: $e,
        mc: D,
        pc: X,
        pbc: se,
        n: C,
        o: e
    };
    let ie, K;
    return t && ([ie,K] = t(q)),
    {
        render: S,
        hydrate: ie,
        createApp: Rl(S, ie)
    }
}
function lt({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function wo(e, t, n=!1) {
    const s = e.children
      , r = t.children;
    if (L(s) && L(r))
        for (let o = 0; o < s.length; o++) {
            const i = s[o];
            let l = r[o];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = Ge(r[o]),
            l.el = i.el),
            n || wo(i, l)),
            l.type === In && (l.el = i.el)
        }
}
function Al(e) {
    const t = e.slice()
      , n = [0];
    let s, r, o, i, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
        const a = e[s];
        if (a !== 0) {
            if (r = n[n.length - 1],
            e[r] < a) {
                t[s] = r,
                n.push(s);
                continue
            }
            for (o = 0,
            i = n.length - 1; o < i; )
                l = o + i >> 1,
                e[n[l]] < a ? o = l + 1 : i = l;
            a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]),
            n[o] = s)
        }
    }
    for (o = n.length,
    i = n[o - 1]; o-- > 0; )
        n[o] = i,
        i = t[i];
    return n
}
const Ol = e=>e.__isTeleport
  , de = Symbol(void 0)
  , In = Symbol(void 0)
  , Ae = Symbol(void 0)
  , Un = Symbol(void 0)
  , Vt = [];
let Le = null;
function Y(e=!1) {
    Vt.push(Le = e ? null : [])
}
function Il() {
    Vt.pop(),
    Le = Vt[Vt.length - 1] || null
}
let Yt = 1;
function er(e) {
    Yt += e
}
function Co(e) {
    return e.dynamicChildren = Yt > 0 ? Le || Et : null,
    Il(),
    Yt > 0 && Le && Le.push(e),
    e
}
function G(e, t, n, s, r, o) {
    return Co(B(e, t, n, s, r, o, !0))
}
function Po(e, t, n, s, r) {
    return Co(F(e, t, n, s, r, !0))
}
function bn(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function ft(e, t) {
    return e.type === t.type && e.key === t.key
}
const Sn = "__vInternal"
  , Ro = ({key: e})=>e != null ? e : null
  , hn = ({ref: e, ref_key: t, ref_for: n})=>e != null ? ae(e) || he(e) || V(e) ? {
    i: pe,
    r: e,
    k: t,
    f: !!n
} : e : null;
function B(e, t=null, n=null, s=0, r=null, o=e === de ? 0 : 1, i=!1, l=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Ro(t),
        ref: t && hn(t),
        scopeId: ro,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: pe
    };
    return l ? (ks(c, n),
    o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ae(n) ? 8 : 16),
    Yt > 0 && !i && Le && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Le.push(c),
    c
}
const F = Sl;
function Sl(e, t=null, n=null, s=0, r=null, o=!1) {
    if ((!e || e === al) && (e = Ae),
    bn(e)) {
        const l = rt(e, t, !0);
        return n && ks(l, n),
        Yt > 0 && !o && Le && (l.shapeFlag & 6 ? Le[Le.indexOf(e)] = l : Le.push(l)),
        l.patchFlag |= -2,
        l
    }
    if ($l(e) && (e = e.__vccOpts),
    t) {
        t = Tl(t);
        let {class: l, style: c} = t;
        l && !ae(l) && (t.class = En(l)),
        ne(c) && (qr(c) && !L(c) && (c = be({}, c)),
        t.style = us(c))
    }
    const i = ae(e) ? 1 : Yi(e) ? 128 : Ol(e) ? 64 : ne(e) ? 4 : V(e) ? 2 : 0;
    return B(e, t, n, s, r, i, o, !0)
}
function Tl(e) {
    return e ? qr(e) || Sn in e ? be({}, e) : e : null
}
function rt(e, t, n=!1) {
    const {props: s, ref: r, patchFlag: o, children: i} = e
      , l = t ? Nl(s || {}, t) : s;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && Ro(l),
        ref: t && t.ref ? n && r ? L(r) ? r.concat(hn(t)) : [r, hn(t)] : hn(t) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== de ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && rt(e.ssContent),
        ssFallback: e.ssFallback && rt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function Mo(e=" ", t=0) {
    return F(In, null, e, t)
}
function bt(e="", t=!1) {
    return t ? (Y(),
    Po(Ae, null, e)) : F(Ae, null, e)
}
function Ve(e) {
    return e == null || typeof e == "boolean" ? F(Ae) : L(e) ? F(de, null, e.slice()) : typeof e == "object" ? Ge(e) : F(In, null, String(e))
}
function Ge(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : rt(e)
}
function ks(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null)
        t = null;
    else if (L(t))
        n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1),
            ks(e, r()),
            r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !(Sn in t) ? t._ctx = pe : r === 3 && pe && (pe.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        V(t) ? (t = {
            default: t,
            _ctx: pe
        },
        n = 32) : (t = String(t),
        s & 64 ? (n = 16,
        t = [Mo(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Nl(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class")
                t.class !== s.class && (t.class = En([t.class, s.class]));
            else if (r === "style")
                t.style = us([t.style, s.style]);
            else if (wn(r)) {
                const o = t[r]
                  , i = s[r];
                i && o !== i && !(L(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i)
            } else
                r !== "" && (t[r] = s[r])
    }
    return t
}
function Be(e, t, n, s=null) {
    ke(e, t, 7, [n, s])
}
const Fl = Eo();
let Ll = 0;
function jl(e, t, n) {
    const s = e.type
      , r = (t ? t.appContext : e.appContext) || Fl
      , o = {
        uid: Ll++,
        vnode: e,
        type: s,
        parent: t,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Nr(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(r.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: yo(s, r),
        emitsOptions: so(s, r),
        emit: null,
        emitted: null,
        propsDefaults: re,
        inheritAttrs: s.inheritAttrs,
        ctx: re,
        data: re,
        props: re,
        attrs: re,
        slots: re,
        refs: re,
        setupState: re,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = Ki.bind(null, o),
    e.ce && e.ce(o),
    o
}
let ce = null;
const Hl = ()=>ce || pe
  , Mt = e=>{
    ce = e,
    e.scope.on()
}
  , mt = ()=>{
    ce && ce.scope.off(),
    ce = null
}
;
function ko(e) {
    return e.vnode.shapeFlag & 4
}
let Jt = !1;
function Ul(e, t=!1) {
    Jt = t;
    const {props: n, children: s} = e.vnode
      , r = ko(e);
    vl(e, n, r, t),
    wl(e, s);
    const o = r ? Bl(e, t) : void 0;
    return Jt = !1,
    o
}
function Bl(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = bs(new Proxy(e.ctx,pl));
    const {setup: s} = n;
    if (s) {
        const r = e.setupContext = s.length > 1 ? Dl(e) : null;
        Mt(e),
        It();
        const o = nt(s, e, 0, [e.props, r]);
        if (St(),
        mt(),
        Ir(o)) {
            if (o.then(mt, mt),
            t)
                return o.then(i=>{
                    tr(e, i, t)
                }
                ).catch(i=>{
                    Mn(i, e, 0)
                }
                );
            e.asyncDep = o
        } else
            tr(e, o, t)
    } else
        Ao(e, t)
}
function tr(e, t, n) {
    V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = Jr(t)),
    Ao(e, n)
}
let nr;
function Ao(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && nr && !s.render) {
            const r = s.template || Rs(e).template;
            if (r) {
                const {isCustomElement: o, compilerOptions: i} = e.appContext.config
                  , {delimiters: l, compilerOptions: c} = s
                  , a = be(be({
                    isCustomElement: o,
                    delimiters: l
                }, i), c);
                s.render = nr(r, a)
            }
        }
        e.render = s.render || je
    }
    Mt(e),
    It(),
    gl(e),
    St(),
    mt()
}
function Vl(e) {
    return new Proxy(e.attrs,{
        get(t, n) {
            return Ce(e, "get", "$attrs"),
            t[n]
        }
    })
}
function Dl(e) {
    const t = s=>{
        e.exposed = s || {}
    }
    ;
    let n;
    return {
        get attrs() {
            return n || (n = Vl(e))
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Tn(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Jr(bs(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in Bt)
                    return Bt[n](e)
            },
            has(t, n) {
                return n in t || n in Bt
            }
        }))
}
function Kl(e, t=!0) {
    return V(e) ? e.displayName || e.name : e.name || t && e.__name
}
function $l(e) {
    return V(e) && "__vccOpts"in e
}
const Re = (e,t)=>ji(e, t, Jt);
function Oo(e, t, n) {
    const s = arguments.length;
    return s === 2 ? ne(t) && !L(t) ? bn(t) ? F(e, null, [t]) : F(e, t) : F(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && bn(n) && (n = [n]),
    F(e, t, n))
}
const zl = Symbol("")
  , ql = ()=>Qe(zl)
  , Wl = "3.2.47"
  , Ql = "http://www.w3.org/2000/svg"
  , at = typeof document < "u" ? document : null
  , sr = at && at.createElement("template")
  , Yl = {
    insert: (e,t,n)=>{
        t.insertBefore(e, n || null)
    }
    ,
    remove: e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e,t,n,s)=>{
        const r = t ? at.createElementNS(Ql, e) : at.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple),
        r
    }
    ,
    createText: e=>at.createTextNode(e),
    createComment: e=>at.createComment(e),
    setText: (e,t)=>{
        e.nodeValue = t
    }
    ,
    setElementText: (e,t)=>{
        e.textContent = t
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>at.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, r, o) {
        const i = n ? n.previousSibling : t.lastChild;
        if (r && (r === o || r.nextSibling))
            for (; t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling)); )
                ;
        else {
            sr.innerHTML = s ? `<svg>${e}</svg>` : e;
            const l = sr.content;
            if (s) {
                const c = l.firstChild;
                for (; c.firstChild; )
                    l.appendChild(c.firstChild);
                l.removeChild(c)
            }
            t.insertBefore(l, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
};
function Jl(e, t, n) {
    const s = e._vtc;
    s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
function Xl(e, t, n) {
    const s = e.style
      , r = ae(n);
    if (n && !r) {
        if (t && !ae(t))
            for (const o in t)
                n[o] == null && rs(s, o, "");
        for (const o in n)
            rs(s, o, n[o])
    } else {
        const o = s.display;
        r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
        "_vod"in e && (s.display = o)
    }
}
const rr = /\s*!important$/;
function rs(e, t, n) {
    if (L(n))
        n.forEach(s=>rs(e, t, s));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const s = Zl(e, t);
        rr.test(n) ? e.setProperty(Ot(s), n.replace(rr, ""), "important") : e[s] = n
    }
}
const or = ["Webkit", "Moz", "ms"]
  , Bn = {};
function Zl(e, t) {
    const n = Bn[t];
    if (n)
        return n;
    let s = Ke(t);
    if (s !== "filter" && s in e)
        return Bn[t] = s;
    s = Pn(s);
    for (let r = 0; r < or.length; r++) {
        const o = or[r] + s;
        if (o in e)
            return Bn[t] = o
    }
    return t
}
const ir = "http://www.w3.org/1999/xlink";
function Gl(e, t, n, s, r) {
    if (s && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(ir, t.slice(6, t.length)) : e.setAttributeNS(ir, t, n);
    else {
        const o = Qo(t);
        n == null || o && !kr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}
function ec(e, t, n, s, r, o, i) {
    if (t === "innerHTML" || t === "textContent") {
        s && i(s, r, o),
        e[t] = n == null ? "" : n;
        return
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = n;
        const c = n == null ? "" : n;
        (e.value !== c || e.tagName === "OPTION") && (e.value = c),
        n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = kr(n) : n == null && c === "string" ? (n = "",
        l = !0) : c === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function dt(e, t, n, s) {
    e.addEventListener(t, n, s)
}
function tc(e, t, n, s) {
    e.removeEventListener(t, n, s)
}
function nc(e, t, n, s, r=null) {
    const o = e._vei || (e._vei = {})
      , i = o[t];
    if (s && i)
        i.value = s;
    else {
        const [l,c] = sc(t);
        if (s) {
            const a = o[t] = ic(s, r);
            dt(e, l, a, c)
        } else
            i && (tc(e, l, i, c),
            o[t] = void 0)
    }
}
const lr = /(?:Once|Passive|Capture)$/;
function sc(e) {
    let t;
    if (lr.test(e)) {
        t = {};
        let s;
        for (; s = e.match(lr); )
            e = e.slice(0, e.length - s[0].length),
            t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Ot(e.slice(2)), t]
}
let Vn = 0;
const rc = Promise.resolve()
  , oc = ()=>Vn || (rc.then(()=>Vn = 0),
Vn = Date.now());
function ic(e, t) {
    const n = s=>{
        if (!s._vts)
            s._vts = Date.now();
        else if (s._vts <= n.attached)
            return;
        ke(lc(s, n.value), t, 5, [s])
    }
    ;
    return n.value = e,
    n.attached = oc(),
    n
}
function lc(e, t) {
    if (L(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = ()=>{
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(s=>r=>!r._stopped && s && s(r))
    } else
        return t
}
const cr = /^on[a-z]/
  , cc = (e,t,n,s,r=!1,o,i,l,c)=>{
    t === "class" ? Jl(e, s, r) : t === "style" ? Xl(e, n, s) : wn(t) ? fs(t) || nc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : uc(e, t, s, r)) ? ec(e, t, s, o, i, l, c) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s),
    Gl(e, t, s, r))
}
;
function uc(e, t, n, s) {
    return s ? !!(t === "innerHTML" || t === "textContent" || t in e && cr.test(t) && V(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || cr.test(t) && ae(n) ? !1 : t in e
}
const fc = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
el.props;
const vn = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return L(t) ? n=>fn(t, n) : t
}
;
function ac(e) {
    e.target.composing = !0
}
function ur(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const dc = {
    created(e, {modifiers: {lazy: t, trim: n, number: s}}, r) {
        e._assign = vn(r);
        const o = s || r.props && r.props.type === "number";
        dt(e, t ? "change" : "input", i=>{
            if (i.target.composing)
                return;
            let l = e.value;
            n && (l = l.trim()),
            o && (l = zn(l)),
            e._assign(l)
        }
        ),
        n && dt(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (dt(e, "compositionstart", ac),
        dt(e, "compositionend", ur),
        dt(e, "change", ur))
    },
    mounted(e, {value: t}) {
        e.value = t == null ? "" : t
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: s, number: r}}, o) {
        if (e._assign = vn(o),
        e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && zn(e.value) === t))
            return;
        const i = t == null ? "" : t;
        e.value !== i && (e.value = i)
    }
}
  , hc = {
    created(e, {value: t}, n) {
        e.checked = pn(t, n.props.value),
        e._assign = vn(n),
        dt(e, "change", ()=>{
            e._assign(pc(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: n}, s) {
        e._assign = vn(s),
        t !== n && (e.checked = pn(t, s.props.value))
    }
};
function pc(e) {
    return "_value"in e ? e._value : e.value
}
const gc = {
    beforeMount(e, {value: t}, {transition: n}) {
        e._vod = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Lt(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: s}) {
        !t != !n && (s ? t ? (s.beforeEnter(e),
        Lt(e, !0),
        s.enter(e)) : s.leave(e, ()=>{
            Lt(e, !1)
        }
        ) : Lt(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Lt(e, t)
    }
};
function Lt(e, t) {
    e.style.display = t ? e._vod : "none"
}
const mc = be({
    patchProp: cc
}, Yl);
let fr;
function _c() {
    return fr || (fr = Ml(mc))
}
const yc = (...e)=>{
    const t = _c().createApp(...e)
      , {mount: n} = t;
    return t.mount = s=>{
        const r = bc(s);
        if (!r)
            return;
        const o = t._component;
        !V(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.innerHTML = "";
        const i = n(r, !1, r instanceof SVGElement);
        return r instanceof Element && (r.removeAttribute("v-cloak"),
        r.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
;
function bc(e) {
    return ae(e) ? document.querySelector(e) : e
}
var vc = !1;
/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const xc = Symbol();
var ar;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(ar || (ar = {}));
function Ec() {
    const e = si(!0)
      , t = e.run(()=>xs({}));
    let n = []
      , s = [];
    const r = bs({
        install(o) {
            r._a = o,
            o.provide(xc, r),
            o.config.globalProperties.$pinia = r,
            s.forEach(i=>n.push(i)),
            s = []
        },
        use(o) {
            return !this._a && !vc ? s.push(o) : n.push(o),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return r
}
const wc = {
    class: "block font-medium text-sm text-gray-700 dark:text-gray-300"
}
  , Cc = {
    key: 0
}
  , Pc = {
    key: 1
}
  , Rc = {
    __name: "InputLabel",
    props: {
        value: String
    },
    setup(e) {
        return (t,n)=>(Y(),
        G("label", wc, [e.value ? (Y(),
        G("span", Cc, We(e.value), 1)) : (Y(),
        G("span", Pc, [hl(t.$slots, "default")]))]))
    }
}
  , Mc = ["value"]
  , kc = {
    __name: "TextInput",
    props: {
        modelValue: String
    },
    emits: ["update:modelValue"],
    setup(e, {expose: t}) {
        const n = xs(null);
        return Cs(()=>{
            n.value.hasAttribute("autofocus") && n.value.focus()
        }
        ),
        t({
            focus: ()=>n.value.focus()
        }),
        (s,r)=>(Y(),
        G("input", {
            ref_key: "input",
            ref: n,
            class: "border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm pl-2 text-lg",
            value: e.modelValue,
            onInput: r[0] || (r[0] = o=>s.$emit("update:modelValue", o.target.value))
        }, null, 40, Mc))
    }
}
  , Ac = {
    class: "text-sm text-red-600 dark:text-red-400"
}
  , Oc = {
    __name: "InputError",
    props: {
        message: String
    },
    setup(e) {
        return (t,n)=>Ps((Y(),
        G("div", null, [B("p", Ac, We(e.message), 1)], 512)), [[gc, e.message]])
    }
}
  , Ic = ["value"]
  , Sc = {
    __name: "Radio",
    props: {
        checked: {
            type: [Array, Boolean],
            default: !1
        },
        value: {
            type: String,
            default: null
        }
    },
    emits: ["update:checked"],
    setup(e, {emit: t}) {
        const n = e
          , s = Re({
            get() {
                return n.checked
            },
            set(r) {
                t("update:checked", r)
            }
        });
        return (r,o)=>Ps((Y(),
        G("input", {
            "onUpdate:modelValue": o[0] || (o[0] = i=>he(s) ? s.value = i : null),
            type: "radio",
            value: e.value,
            class: "rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
        }, null, 8, Ic)), [[hc, gt(s)]])
    }
}
  , Io = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [s,r] of t)
        n[s] = r;
    return n
}
  , Tc = {
    name: "Popup",
    props: {
        message: {
            type: String,
            default: "Hello World"
        }
    },
    data() {
        return {
            show: !1
        }
    },
    methods: {
        showPopup() {
            this.show = !0,
            setTimeout(()=>{
                this.show = !1
            }
            , 3e3)
        }
    }
}
  , Nc = {
    class: "relative"
};
function Fc(e, t, n, s, r, o) {
    return Y(),
    G("div", Nc, [B("div", {
        class: En(["fixed inset-x-0 bottom-0 text-center bg-green-500 border-2 border-green-700 text-white rounded-md py-4", {
            hidden: !r.show
        }])
    }, We(n.message), 3)])
}
const Lc = Io(Tc, [["render", Fc]])
  , jc = {
    components: {
        InputLabel: Rc,
        TextInput: kc,
        InputError: Oc,
        Radio: Sc,
        Popup: Lc
    },
    data() {
        return {
            googleMapsApiKey: "AIzaSyC2kV5-JBHiQDER92r6epALoEKbHvQ40SM",
            form: {
                sign: null,
                target: null,
                target_side: null,
                target_description: null,
                height: null,
                distance: null,
                azimuth: null,
                direction: null,
                lat: null,
                lng: null,
                nearestCity: null,
                targetNearestCity: null,
                time: null,
                disclosure: null,
                number_of_targets: null,
                target_action: null,
                tcil: null,
                ammunition_consumption: null,
                dva_ammunition_consumption: null,
                tre_ammunition_consumption: null,
                ak_ammunition_consumption: null,
                dshk_ammunition_consumption: null,
                browning_ammunition_consumption: null,
                pkm_ammunition_consumption: null,
                m75_ammunition_consumption: null,
                other_weapon: null,
                other_weapon_ammo: null,
                description: null
            },
            flags: {
                azimuth: !1,
                direction: !1
            },
            watchId: null,
            targets: ["\u041A\u0440\u0438\u043B\u0430\u0442\u0430 \u0420\u0430\u043A\u0435\u0442\u0430.", "\u041B\u0456\u0442\u0430\u043A \u041C\u0430\u043B\u0438\u0439.", "БпЛА типу Невизначений", "БпЛА типу Зала", "БпЛА типу Орлан", "БпЛА типу Суперкам", "БпЛА типу Молнія", "БпЛА типу ШАХЕД", "Зонд", "\u0413\u0435\u043B\u0456\u043A\u043E\u043F\u0442\u0435\u0440.", "\u041A\u0432\u0430\u0434\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0440.", "\u041B\u0456\u0442\u0430\u043A \u0412\u0435\u043B\u0438\u043A\u0438\u0439.", "\u041F\u043E\u0441\u0442\u0440\u0456\u043B\u0438.", "\u0412\u0438\u0431\u0443\u0445\u0438.", "\u0412\u0438\u0445\u043E\u0434\u0438."],
            target_side: ["\u0412\u043E\u0440\u043E\u0436\u0438\u0439.", "\u0421\u0432\u0456\u0439."],
            disclosure: ["\u0412\u0438\u044f\u0432\u043b\u0435\u043D\u043E \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u043D\u043E.", "\u0412\u0438\u044F\u0432\u043B\u0435\u043D\u043E \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u043D\u043E \u0442\u0430 \u0432\u0456\u0437\u0443\u0430\u043B\u044C\u043D\u043E.", "\u0412\u0438\u044F\u0432\u043B\u0435\u043D\u043E \u0432\u0456\u0437\u0443\u0430\u043B\u044C\u043D\u043E.", "Візуально і акустично \u043D\u0435 \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043E.", "\u0412\u0438\u044F\u0432\u043B\u0435\u043D\u043E \u0440\u043E\u0431\u043E\u0442\u0443 \u0441\u0443\u043C\u0456\u0436\u043D\u0438\u0445 \u043F\u0456\u0434\u0440\u043E\u0437\u0434\u0456\u043B\u0456\u0432."],
            target_action: [" \u0443\u0440\u0430\u0436\u0435\u043D\u043E", " \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u043E", " \u043d\u0435 \u0432\u0440\u0430\u0436\u0435\u043d\u043e"],
            targets_bpla: [" \u0442\u0438\u043f\u0443 \u0417\u0430\u043b\u0430.", " \u0442\u0438\u043f\u0443 \u0421\u0443\u043f\u0435\u0440\u043a\u0430\u043c.", " \u0442\u0438\u043f\u0443 \u0428\u0430\u0445\u0435\u0434.", " \u0442\u0438\u043f\u0443 \u041e\u0440\u043b\u0430\u043d.", " \u0442\u0438\u043f\u0443 \u041b\u0430\u043d\u0446\u0435\u0442.", " \u0442\u0438\u043f \u043d\u0435\u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043e."],
            tcil: null,
            ammunition_consumption: null,
            dva_ammunition_consumption: null,
            tre_ammunition_consumption: null,
            ak_ammunition_consumption: null,
            dshk_ammunition_consumption: null,
            browning_ammunition_consumption: null,
            pkm_ammunition_consumption: null,
            m75_ammunition_consumption: null,
            other_weapon: null,
            other_weapon_ammo: null,
            description: null,
            popupMessage: null,
            now: new Date,
            timeout: null
        }
    },
    computed: {
        dataForClipboard() {
            return {
                title: "\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u0446\u0456\u043B\u0456",
                text:
  (this.form.time ? ("" + this.form.time).replace(":", ".") + " " : "") +
  (this.form.sign ? ` ${this.form.sign}` : "") +
  (this.form.nearestCity ? ` р-н н.п. ${this.form.nearestCity}` : "") +
  (this.form.target ? ` ${this.form.target}` : "") +
  (this.form.target_side ? ` ${this.form.target_side}` + " " : ``) +
  (this.form.target_description ? ` ${this.form.target_description}` + " " : "") +
  (this.form.tcil ? " № " + this.form.tcil + ". " : "") +
  (this.form.disclosure ? " " + this.form.disclosure + " " : "") +
  (this.form.number_of_targets ? ` Кількість: ${this.form.number_of_targets}од. ` : "") +
  (() => {
    let coords = [];
    if (this.form.azimuth) coords.push(`А-${this.form.azimuth}°`);
    if (this.form.direction) coords.push(`К-${this.form.direction}°`);
    if (this.form.height) coords.push(`Н-${this.form.height}м.`);
    if (this.form.distance) coords.push(`Д-${this.form.distance}м.`);
    return coords.length ? ` (${coords.join(" ")})` : "";
  })() +
  (this.form.target_action ? " Ціль обстріляно, " + this.form.target_action + ". " : "") +
  (() => {
    let total = 0;
    let bzt = 0;
    let mdz = 0;
    let b32 = 0;

    if (this.form.ammunition_consumption) {
      const amt = Number(this.form.ammunition_consumption);
      total += amt;
      const bzt1 = Math.round(amt / 4);
      const mdz1 = amt - bzt1;
      bzt += bzt1;
      mdz += mdz1;
    }

    if (this.form.dva_ammunition_consumption) {
      const amt = Number(this.form.dva_ammunition_consumption);
      total += amt;
      const bzt2 = Math.round(amt / 3);
      const mdz2 = amt - bzt2;
      bzt += bzt2;
      mdz += mdz2;
    }
      if (this.form.tre_ammunition_consumption) {
  const amt = Number(this.form.tre_ammunition_consumption);
  total += amt;

  const fullCycles = Math.floor(amt / 4);
  const remainder = amt % 4;

  let bzt3 = fullCycles;
  let b32_3 = fullCycles;
  let mdz3 = fullCycles * 2;

  if (remainder >= 1) bzt3 += 1;
  if (remainder >= 2) b32_3 += 1;
  if (remainder === 3) mdz3 += 1;

  bzt += bzt3;
  b32 += b32_3;
  mdz += mdz3;
}

    return total > 0
      ? ` Витрати БК ЗУ MR2 VIKTOR 14,5мм=${total}шт. (в т.ч. БЗТ-${bzt}шт., МДЗ-${mdz}шт., Б32-${b32}шт.). `
      : "";
  })() +
  (this.form.ak_ammunition_consumption
    ? "Витрати БК АК74-5.45mm=" +
      this.form.ak_ammunition_consumption +
      "шт (в т.ч. ТЗ-" +
      Math.round(this.form.ak_ammunition_consumption / 3) +
      "шт., ПС-" +
      (this.form.ak_ammunition_consumption -
        Math.round(this.form.ak_ammunition_consumption / 3)) +
      "шт.)."
    : "") +
  (this.form.dshk_ammunition_consumption
    ? " Витрати БК ДШК-12.7mm=" + this.form.dshk_ammunition_consumption + "шт. "
    : "") +
  (this.form.browning_ammunition_consumption
    ? " Витрати БК Browning M2-12.7mm=" + this.form.browning_ammunition_consumption + "шт. "
    : "") +
  (this.form.pkm_ammunition_consumption
    ? " Витрати БК ПКМ-7.62mm=" + this.form.pkm_ammunition_consumption + "шт. "
    : "") +
  (this.form.m75_ammunition_consumption
    ? " Витрати M75-20.0mm=" + this.form.m75_ammunition_consumption + "шт. "
    : "") + 
  (this.form.other_weapon && this.form.other_weapon_ammo
    ? " Витрати БК " + this.form.other_weapon + "=" + this.form.other_weapon_ammo + "шт. "
    : "") +
  (this.form.description ? " " + this.form.description : "")
            }
        },
        signErrorMessage() {
            return this.form.sign && this.form.sign.length > 60 ? "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u0435 \u0431\u0456\u043B\u044C\u0448\u0435 60 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432" : null
        },
        targetDescriptionErrorMessage() {
            return this.form.target_description && this.form.target_description.length > 100 ? "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u0435 \u0431\u0456\u043B\u044C\u0448\u0435 100 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432" : null
        },
        numberErrorMessage() {
            return this.form.number_of_targets && isNaN(parseInt(this.form.number_of_targets)) || parseInt(this.form.number_of_targets) > 100 || parseInt(this.form.number_of_targets) < 0 ? "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 0 \u0434\u043E 100" : null
        },
        heightErrorMessage() {
            return this.form.height && isNaN(parseInt(this.form.height)) || parseInt(this.form.height) > 1e4 || parseInt(this.form.height) < 0 ? "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 0 \u0434\u043E 10000" : null
        },
        distanceErrorMessage() {
            return this.form.distance && isNaN(parseInt(this.form.distance)) || parseInt(this.form.distance) > 2e4 || parseInt(this.form.distance) < 0 ? "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 0 \u0434\u043E 20000" : null
        },
        azimuthErrorMessage() {
            return this.form.azimuth && isNaN(parseInt(this.form.azimuth)) || parseInt(this.form.azimuth) > 360 || parseInt(this.form.azimuth) < 0 ? "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 0 \u0434\u043E 360" : null
        },
        directionErrorMessage() {
            return this.form.direction && isNaN(parseInt(this.form.direction)) || parseInt(this.form.direction) > 360 || parseInt(this.form.direction) < 0 ? "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 0 \u0434\u043E 360" : null
        },
        targetNearestCityErrorMessage() {
            return this.form.azimuth ? this.form.distance ? !this.form.lat && !this.form.lng ? "\u041D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u0438 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0438 \u0446\u0456\u043B\u0456 \u0431\u0435\u0437 \u0432\u043A\u0430\u0437\u0430\u043D\u043D\u044F \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 \u0432\u043B\u0430\u0441\u043D\u043E\u0457 \u043F\u043E\u0437\u0438\u0446\u0456\u0457" : null : "\u041D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0435 \u043C\u0456\u0441\u0442\u043E \u0431\u0435\u0437 \u0432\u043A\u0430\u0437\u0430\u043D\u043D\u044F \u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456" : "\u041D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0435 \u043C\u0456\u0441\u0442\u043E \u0431\u0435\u0437 \u0432\u043A\u0430\u0437\u0430\u043D\u043D\u044F \u0430\u0437\u0438\u043C\u0443\u0442\u0443"
        },
        calculateTargetCoordinates() {
            if (!this.form.azimuth || !this.form.distance || !this.form.lat || !this.form.lng)
                return {
                    lat: NaN,
                    lng: NaN
                };
            const e = 6371e3
              , t = parseInt(this.form.azimuth) * Math.PI / 180
              , n = parseInt(this.form.distance) / e
              , s = this.form.lat * Math.PI / 180
              , r = this.form.lng * Math.PI / 180
              , o = Math.asin(Math.sin(s) * Math.cos(n) + Math.cos(s) * Math.sin(n) * Math.cos(t))
              , i = r + Math.atan2(Math.sin(t) * Math.sin(n) * Math.cos(s), Math.cos(n) - Math.sin(s) * Math.sin(o))
              , l = o * 180 / Math.PI
              , c = i * 180 / Math.PI;
            return {
                lat: l,
                lng: c
            }
        }
    },
    methods: {
        copyToClipboard() {
            const e = document.createElement("textarea");
            e.value = this.dataForClipboard.text,
            document.body.appendChild(e),
            e.select(),
            document.execCommand("copy"),
            document.body.removeChild(e),
            this.popupMessage = "\u0421\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E",
            this.$refs.popup.showPopup()
        },
        filterObject(e, t) {
            return Object.fromEntries(Object.entries(e).filter(([n,s])=>t(s, n)))
        },
        getCurrentTime: function(e=0) {
    const t = new Date(this.now);
    t.setMinutes(t.getMinutes() + e),
    this.now = t;
    const time = t.toLocaleTimeString("uk-UA", {
        timeZone: "Europe/Kiev",
        hourCycle: "h23",
        hour: "2-digit",
        minute: "2-digit"
    });
    const date = t.toLocaleDateString("uk-UA", {
      timeZone: "Europe/Kiev",
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    this.form.time = `${date} ${time}`;
},
        getCoordinates() {
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(e=>{
                this.form.lat = e.coords.latitude,
                this.form.lng = e.coords.longitude
            }
            ) : (this.popupMessage = "Geolocation is not supported by this browser.",
            this.$refs.popup.showPopup())
        },
        getNearestCity(e, t) {
            if (!e || !t)
                return;
            const n = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${e},${t}&key=${this.googleMapsApiKey}&region=UA&language=uk`;
            return fetch(n).then(s=>s.json()).then(s=>{
                const r = s.results[0].address_components.find(o=>o.types[0] === "plus_code");
                return r ? s.results[0].formatted_address.replace(r.long_name, "").trim() : s.results[0].formatted_address
            }
            ).catch(()=>{
                this.popupMessage = "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u043D\u0430\u0437\u0432\u0438 \u043C\u0456\u0441\u0442\u0430",
                this.$refs.popup.showPopup()
            }
            )
        },
        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        },
        loadInputFromLocalStorage() {
            this.form.sign = localStorage.getItem("Sign") || null,
            this.form.nearestCity = localStorage.getItem("nearestCity") || null,
            this.form.lat = localStorage.getItem("lat") || null,
            this.form.lng = localStorage.getItem("lng") || null,
            this.form.other_weapon = localStorage.getItem("other_weapon") || null
        },
        roundNearest5(e) {
            return Math.round(e / 5) * 5
        },
        share() {
            navigator.canShare(this.dataForClipboard) ? navigator.share(this.dataForClipboard).then(()=>this.popupMessage = "Successful share").catch(()=>this.popupMessage = "Error sharing") : this.popupMessage = "Your system doesn't support sharing files.",
            this.$refs.popup.showPopup()
        },
        startTracking(e) {
            if (!window.DeviceOrientationEvent) {
                this.popupMessage = "DeviceOrientationEvent is not supported.",
                this.$refs.popup.showPopup();
                return
            }
            this.flags[e] = !0,
            navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/) ? DeviceOrientationEvent.requestPermission().then(n=>{
                n === "granted" ? window.addEventListener("deviceorientation", this.updateCompass, !1) : (this.popupMessage = "DeviceOrientationEvent is not granted.",
                this.$refs.popup.showPopup())
            }
            ).catch(()=>{
                this.popupMessage = "DeviceOrientationEvent is not supported.",
                this.$refs.popup.showPopup()
            }
            ) : window.addEventListener("deviceorientationabsolute", this.updateCompass, !1)
        },
        stopTracking() {
            this.flags.azimuth = !1,
            this.flags.direction = !1,
            window.removeEventListener("deviceorientationabsolute", this.updateCompass, !1),
            window.removeEventListener("deviceorientation", this.updateCompass, !1)
        },
        updateCompass(e) {
            this.form[Object.keys(this.filterObject(this.flags, (t,n)=>t || n === !0))[0]] = this.roundNearest5(e.webkitCompassHeading || Math.abs(e.alpha - 360))
        }
    },
    watch: {
        "form.sign": function(e) {
            localStorage.setItem("Sign", e)
        },
        "form.nearestCity": function(e) {
            localStorage.setItem("nearestCity", e)
        },
        "form.lat": function(e) {
            localStorage.setItem("lat", e)
        },
        "form.lng": {
            async handler(e) {
                localStorage.setItem("lng", e),
                this.form.nearestCity = await this.getNearestCity(this.form.lat, this.form.lng)
            }
        }
    },
    created() {
        this.loadInputFromLocalStorage(),
        this.getCurrentTime()
    },
    beforeUnmount() {
        this.stopTracking()
    }
}
  , Hc = {
    class: "pb-4"
}
  , Uc = {
    class: "pb-4"
}
  , Bc = {
    class: "grid grid-cols-2"
}
  , Vc = {
    class: "ml-2 text-sm text-gray-600 dark:text-gray-400"
}
  , Dc = {
    key: 0,
    class: "pb-4"
}
  , Kc = {
    class: "pb-4"
}
  , $c = {
    class: "grid grid-cols-3"
}
  , zc = {
    class: "ml-2 text-sm text-gray-600 dark:text-gray-400"
}
  , qc = {
    class: "pb-4"
}
  , Wc = {
    class: "pb-4"
}
  , Qc = {
    class: "flex justify-between"
}
  , Yc = {
    class: "space-x-2"
}
  , Jc = {
    class: "pb-4"
}
  , Xc = {
    class: "pb-4"
}
  , Zc = {
    class: "flex justify-between"
}
  , Gc = {
    key: 0
}
  , eu = {
    class: "pb-4"
}
  , tu = {
    class: "flex justify-between"
}
  , nu = {
    key: 0
}
  , su = {
    class: "pb-4"
}
  , ru = {
    class: "flex justify-between"
}
  , ou = {
    key: 0,
    class: "text-white text-xs"
}
  , iu = {
    class: "pb-4"
}
  , lu = {
    class: "flex justify-between"
}
  , cu = {
    class: "space-x-2"
}
  , uu = {
    class: "pb-4"
}
  , fu = {
    class: "grid grid-cols-2"
}
  , au = {
    class: "ml-2 text-sm text-gray-600 dark:text-gray-400"
}
  , du = {
    class: "pb-4"
}
  , hu = {
    class: "grid grid-cols-3"
}
  , pu = {
    class: "ml-2 text-sm text-gray-600 dark:text-gray-400"
}
  , gu = {
    key: 1,
    class: "pb-4"
}
  , mu = {
    class: "pb-4"
}
  , _u = {
    key: 2,
    class: "grid grid-cols-2 space-x-4"
}
  , yu = B("div", {
    class: "dark:text-white pt-4"
}, [Mo("VIVERE MILITARE EST! Жити - значить боротися!"), B("a", {
    href: "mailto:gla@gmail.com"
}, "")], -1);
function bu(e, t, n, s, r, o) {
    const i = Ft("Popup")
      , l = Ft("InputLabel")
      , c = Ft("TextInput")
      , a = Ft("InputError")
      , f = Ft("Radio");
    return Y(),
    G(de, null, [F(i, {
        message: r.popupMessage,
        ref: "popup"
    }, null, 8, ["message"]), B("div", Hc, [F(l, {
        for: "sign",
        value: "\u041F\u043E\u0437\u0438\u0446\u0456\u044F:"
    }), F(c, {
        id: "sign",
        modelValue: r.form.sign,
        "onUpdate:modelValue": t[0] || (t[0] = d=>r.form.sign = d),
        type: "text",
        class: "mt-1 block w-full"
    }, null, 8, ["modelValue"]), F(a, {
        class: "mt-2",
        message: o.signErrorMessage
    }, null, 8, ["message"])]), B("div", Uc, [F(l, {
        for: "target",
        value: "\u0426\u0456\u043B\u044C:"
    }), B("div", Bc, [(Y(!0),
    G(de, null, cn(r.targets, (d,p)=>(Y(),
    G("label", {
        key: p,
        class: "flex items-center py-1"
    }, [F(f, {
        checked: r.form.target,
        "onUpdate:checked": _=>r.form.target = _,
        name: "target",
        value: d
    }, null, 8, ["checked", "onUpdate:checked", "value"]), B("span", Vc, We(d), 1)]))), 128))])]), r.form.target === "\u0412\u0438\u0445\u043E\u0434\u0438" || r.form.target === "\u0412\u0438\u0431\u0443\u0445\u0438" || r.form.target === "\u041F\u043E\u0441\u0442\u0440\u0456\u043B\u0438" ? (Y(),
    G("div", Dc, [F(l, {
        for: "target_description",
        value: "\u041E\u043F\u0438\u0441 \u0446\u0456\u043B\u0456:"
    }), F(c, {
        id: "target_description",
        modelValue: r.form.target_description,
        "onUpdate:modelValue": t[1] || (t[1] = d=>r.form.target_description = d),
        type: "text",
        placeholder: "\u041F\u041F\u041E, \u0417\u0435\u043D\u0456\u0442\u043A\u0430, \u0421\u0442\u0432\u043E\u043B\u044C\u043D\u0430 \u0430\u0440\u0442\u0438\u043B\u0435\u0440\u0456\u044F...",
        class: "mt-1 block w-full"
    }, null, 8, ["modelValue"]), F(a, {
        class: "mt-2",
        message: o.targetDescriptionErrorMessage
    }, null, 8, ["message"])])) : bt("", !0), B("div", Kc, [F(l, {
        for: "target_side",
        value: "\u0421\u0442\u043E\u0440\u043E\u043D\u0430:"
    }), B("div", $c, [(Y(!0),
    G(de, null, cn(r.target_side, (d,p)=>(Y(),
    G("label", {
        key: p,
        class: "flex items-center py-1"
    }, [F(f, {
        checked: r.form.target_side,
        "onUpdate:checked": t[2] || (t[2] = _=>r.form.target_side = _),
        name: "target_side",
        value: d
    }, null, 8, ["checked", "value"]), B("span", zc, We(d), 1)]))), 128))])]),
    F(l, {
        for: "tcil"
    }, "\u041d\u043e\u043c\u0435\u0440 \u0446\u0456\u043b\u0456:"),
    F(c, {
        id: "tcil",
        modelValue: r.form.tcil,
        "onUpdate:modelValue": t[27] || (t[27] = d => r.form.tcil = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]),
    B("div", qc, [F(l, {
        for: "number_of_targets",
        value: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0446\u0456\u043B\u0435\u0439:"
    }), F(c, {
        id: "number_of_targets",
        modelValue: r.form.number_of_targets,
        "onUpdate:modelValue": t[3] || (t[3] = d=>r.form.number_of_targets = d),
        type: "tel",
        class: "mt-1 block w-full"
    }, null, 8, ["modelValue"]), F(a, {
        class: "mt-2",
        message: o.numberErrorMessage
    }, null, 8, ["message"])]), B("div", Wc, [B("div", Qc, [F(l, {
        for: "distance",
        value: "\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0456\u044F (\u043C):"
    }), B("div", Yc, [B("button", {
        class: "bg-sky-500 rounded text-white px-2 text-sm",
        onClick: t[4] || (t[4] = d=>{
            this.form.distance = "5000+"
        }
        )
    }, " 5+ \u043A\u043C, \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u043D\u043E "), B("button", {
        class: "bg-sky-500 rounded text-white px-2 text-sm",
        onClick: t[5] || (t[5] = d=>{
            this.form.distance = "10000+"
        }
        )
    }, " 10+ \u043A\u043C ")])]), F(c, {
        id: "distance",
        modelValue: r.form.distance,
        "onUpdate:modelValue": t[6] || (t[6] = d=>r.form.distance = d),
        type: "tel",
        class: "mt-1 block w-full"
    }, null, 8, ["modelValue"]), F(a, {
        class: "mt-2",
        message: o.distanceErrorMessage
    }, null, 8, ["message"])]), B("div", Jc, [F(l, {
        for: "height",
        value: "\u0412\u0438\u0441\u043E\u0442\u0430 (\u043C):"
    }), F(c, {
        id: "height",
        modelValue: r.form.height,
        "onUpdate:modelValue": t[7] || (t[7] = d=>r.form.height = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]), F(a, {
        class: "mt-2",
        message: o.heightErrorMessage
    }, null, 8, ["message"])]), B("div", Xc, [B("div", Zc, [F(l, {
        for: "azimuth",
        value: "\u0410\u0437\u0438\u043C\u0443\u0442:"
    }), o.isMobile() ? (Y(),
    G("div", Gc, [!r.flags.azimuth && !r.flags.direction ? (Y(),
    G("button", {
        key: 0,
        class: "bg-sky-500 rounded text-white px-2 text-sm",
        onClick: t[8] || (t[8] = d=>o.startTracking("azimuth"))
    }, " \u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u0430\u043D\u0456 \u0437 \u043A\u043E\u043C\u043F\u0430\u0441\u0443 ")) : (Y(),
    G("button", {
        key: 1,
        class: "bg-red-500 rounded text-white px-2 text-sm",
        onClick: t[9] || (t[9] = d=>o.stopTracking())
    }, " \u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438 "))])) : bt("", !0)]), F(c, {
        id: "azimuth",
        modelValue: r.form.azimuth,
        "onUpdate:modelValue": t[10] || (t[10] = d=>r.form.azimuth = d),
        type: "tel",
        class: "mt-1 block w-full"
    }, null, 8, ["modelValue"]), F(a, {
        class: "mt-2",
        message: o.azimuthErrorMessage
    }, null, 8, ["message"])]), B("div", eu, [B("div", tu, [F(l, {
        for: "direction",
        value: "\u041A\u0443\u0440\u0441:"
    }), o.isMobile() ? (Y(),
    G("div", nu, [!r.flags.azimuth && !r.flags.direction ? (Y(),
    G("button", {
        key: 0,
        class: "bg-sky-500 rounded text-white px-2 text-sm",
        onClick: t[11] || (t[11] = d=>o.startTracking("direction"))
    }, " \u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u0430\u043D\u0456 \u0437 \u043A\u043E\u043C\u043F\u0430\u0441\u0443 ")) : (Y(),
    G("button", {
        key: 1,
        class: "bg-red-500 rounded text-white px-2 text-sm",
        onClick: t[12] || (t[12] = d=>o.stopTracking())
    }, " \u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438 "))])) : bt("", !0)]), F(c, {
        id: "direction",
        modelValue: r.form.direction,
        "onUpdate:modelValue": t[13] || (t[13] = d=>r.form.direction = d),
        type: "tel",
        class: "mt-1 block w-full"
    }, null, 8, ["modelValue"]), F(a, {
        class: "mt-2",
        message: o.directionErrorMessage
    }, null, 8, ["message"])]), B("div", su, [B("div", ru, [B("div", null, [F(l, {
        for: "nearestCity",
        value: "\u041D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u0439 \u043F\u0443\u043D\u043A\u0442:"
    }), r.form.lat && r.form.lng ? (Y(),
    G("span", ou, We(r.form.lat) + ", " + We(r.form.lng), 1)) : bt("", !0)]), B("button", {
        class: "bg-sky-500 rounded text-white px-2 text-sm",
        onClick: t[14] || (t[14] = d=>o.getCoordinates())
    }, " \u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u0439 \u043F\u0443\u043D\u043A\u0442 ")]), F(c, {
        id: "nearestCity",
        modelValue: r.form.nearestCity,
        "onUpdate:modelValue": t[15] || (t[15] = d=>r.form.nearestCity = d),
        type: "text",
        class: "mt-1 block w-full"
    }, null, 8, ["modelValue"])]), B("div", iu, [B("div", lu, [F(l, {
        for: "time",
        value: "\u0427\u0430\u0441 \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u0446\u0456\u043B\u0456:"
    }), B("div", cu, [B("button", {
        class: "bg-sky-500 rounded text-white px-2 text-sm",
        onClick: t[16] || (t[16] = d=>o.getCurrentTime(-1))
    }, " -1 \u0445\u0432. "), B("button", {
        class: "bg-sky-500 rounded text-white px-2 text-sm",
        onClick: t[17] || (t[17] = d=>o.getCurrentTime(1))
    }, " +1 \u0445\u0432. ")])]), F(c, {
        id: "time",
        modelValue: r.form.time,
        "onUpdate:modelValue": t[18] || (t[18] = d=>r.form.time = d),
        type: "text",
        class: "mt-1 block w-full"
    }, null, 8, ["modelValue"])]), B("div", uu, [F(l, {
        for: "disclosure",
        value: "\u0412\u0438\u044F\u0432:"
    }), B("div", fu, [(Y(!0),
    G(de, null, cn(r.disclosure, (d,p)=>(Y(),
    G("label", {
        key: p,
        class: "flex items-center py-1"
    }, [F(f, {
        checked: r.form.disclosure,
        "onUpdate:checked": t[19] || (t[19] = _=>r.form.disclosure = _),
        name: "disclosure",
        value: d
    }, null, 8, ["checked", "value"]), B("span", au, We(d), 1)]))), 128))])]), B("div", du, [F(l, {
        for: "target_action",
        value: "\u041F\u043E\u0432\u0456\u0442\u0440\u044F\u043D\u043E\u0433\u043E \u041F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A\u0430:"
    }), B("div", hu, [(Y(!0),
    G(de, null, cn(r.target_action, (d,p)=>(Y(),
    G("label", {
        key: p,
        class: "flex items-center py-1"
    }, [F(f, {
        checked: r.form.target_action,
        "onUpdate:checked": t[20] || (t[20] = _=>r.form.target_action = _),
        name: "target_action",
        value: d
    }, null, 8, ["checked", "value"]), B("span", pu, We(d), 1)]))), 128))])]), r.form.target_action ? (Y(),
    G("div", gu, [
    // Поле для введення значення розходу боєприпасів
    F(l, {
        for: "ammunition_consumption"
    }, "ЗУ MR2 VIKTOR 14,5мм, стрічка 1БЗТ-3МДЗ"),
    F(c, {
        id: "ammunition_consumption",
        modelValue: r.form.ammunition_consumption,
        "onUpdate:modelValue": t[21] || (t[21] = d => r.form.ammunition_consumption = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]),
        // Поле для введення значення розходу боєприпасів
    F(l, {
        for: "dva_ammunition_consumption"
    }, "ЗУ MR2 VIKTOR 14,5мм, стрічка 1БЗТ-2МДЗ"),
    F(c, {
        id: "dva_ammunition_consumption",
        modelValue: r.form.dva_ammunition_consumption,
        "onUpdate:modelValue": t[32] || (t[32] = d => r.form.dva_ammunition_consumption = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]),
        // Поле для введення значення розходу боєприпасів
    F(l, {
        for: "tre_ammunition_consumption"
    }, "ЗУ MR2 VIKTOR 14,5мм, стрічка 1БЗТ-1Б32-2МДЗ"),
    F(c, {
        id: "tre_ammunition_consumption",
        modelValue: r.form.tre_ammunition_consumption,
        "onUpdate:modelValue": t[33] || (t[33] = d => r.form.tre_ammunition_consumption = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]),
    // Поле для введення значення з коментарем "АК74-5.45"
    F(l, {
        for: "ak_ammunition_consumption"
    }, "АК74-5.45mm"),
    F(c, {
        id: "ak_ammunition_consumption",
        modelValue: r.form.ak_ammunition_consumption,
        "onUpdate:modelValue": t[26] || (t[26] = d => r.form.ak_ammunition_consumption = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]),
        // Поле для введення значення з коментарем "ДШК-12.7мм"
    F(l, {
        for: "dshk_ammunition_consumption"
    }, "ДШК-12.7mm"),
    F(c, {
        id: "dshk_ammunition_consumption",
        modelValue: r.form.dshk_ammunition_consumption,
        "onUpdate:modelValue": t[28] || (t[28] = d => r.form.dshk_ammunition_consumption = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]),
        // Поле для введення значення з коментарем "Browning M2-12.7mm"
    F(l, {
        for: "browning_ammunition_consumption"
    }, "Browning M2-12.7mm"),
    F(c, {
        id: "browning_ammunition_consumption",
        modelValue: r.form.dbrowning_ammunition_consumption,
        "onUpdate:modelValue": t[29] || (t[29] = d => r.form.browning_ammunition_consumption = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]),
         // Поле для введення значення з коментарем "ПКМ-7.62mm"
    F(l, {
        for: "pkm_ammunition_consumption"
    }, "ПКМ-7.62mm"),
    F(c, {
        id: "pkm_ammunition_consumption",
        modelValue: r.form.pkm_ammunition_consumption,
        "onUpdate:modelValue": t[30] || (t[30] = d => r.form.pkm_ammunition_consumption = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]),
        // Поле для введення значення з коментарем "М75-20.0мм"
    F(l, {
        for: "m75_ammunition_consumption"
    }, "M75-20.0mm"),
    F(c, {
        id: "m75_ammunition_consumption",
        modelValue: r.form.m75_ammunition_consumption,
        "onUpdate:modelValue": t[31] || (t[31] = d => r.form.m75_ammunition_consumption = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]),
        // Напис "Інше озброєння", з однаковим компонентом
F(l, {
    for: "other_weapon"
}, "Інше озброєння"),
// Поле для введення марки озброєння (зберігається в localStorage)
F("input", {
    id: "other_weapon",
    type: "text",
    class: "mt-1 block w-full",
    value: localStorage.getItem("other_weapon") || "",
    onInput: e => {
        const val = e.target.value;
        localStorage.setItem("other_weapon", val);
        r.form.other_weapon = val;
    }
}, null, 8, ["modelValue"]),
        
        // Поле для введення значення з коментарем "Іншого озброєння"
    F(l, {
        for: "other_weapon_ammo"
    }, "Кільсть БК іншого озброєння"),
    F(c, {
        id: "other_weapon_ammo",
        modelValue: r.form.other_weapon_ammo,
        "onUpdate:modelValue": t[34] || (t[34] = d => r.form.other_weapon_ammo = d),
        type: "tel",
        class: "mt-1 block w-full",
        required: ""
    }, null, 8, ["modelValue"]),

// Повідомлення про помилку, якщо воно є
    F(a, {
        class: "mt-2",
        message: e.ammunition_consumptionErrorMessage
    }, null, 8, ["message"])])) : bt("", !0), B("div", mu, [F(l, {
        for: "description",
        value: "\u041E\u043F\u0438\u0441:"
    }), Ps(B("textarea", {
        id: "description",
        "onUpdate:modelValue": t[22] || (t[22] = d=>r.form.description = d),
        type: "tel",
        class: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm pl-2 text-lg",
        rows: "5"
    }, null, 512), [[dc, r.form.description]]), F(a, {
        class: "mt-2",
        message: e.descriptionErrorMessage
    }, null, 8, ["message"])]), o.isMobile() ? (Y(),
    G("div", _u, [B("button", {
        class: "bg-green-500 rounded text-white px-2 text-xl",
        onClick: t[23] || (t[23] = d=>o.copyToClipboard())
    }, " \u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 "), o.isMobile() ? (Y(),
    G("button", {
        key: 0,
        class: "bg-indigo-500 rounded text-white px-2 text-xl",
        onClick: t[24] || (t[24] = d=>o.share())
    }, " \u041F\u043E\u0448\u0438\u0440\u0438\u0442\u0438 ")) : bt("", !0)])) : (Y(),
    G("button", {
        key: 3,
        class: "bg-green-500 rounded text-white px-2 text-xl w-full",
        onClick: t[25] || (t[25] = d=>o.copyToClipboard())
    }, " \u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 ")), yu], 64)
}
const vu = Io(jc, [["render", bu]]);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const xt = typeof window < "u";
function xu(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const J = Object.assign;
function Dn(e, t) {
    const n = {};
    for (const s in t) {
        const r = t[s];
        n[s] = He(r) ? r.map(e) : e(r)
    }
    return n
}
const Dt = ()=>{}
  , He = Array.isArray
  , Eu = /\/$/
  , wu = e=>e.replace(Eu, "");
function Kn(e, t, n="/") {
    let s, r = {}, o = "", i = "";
    const l = t.indexOf("#");
    let c = t.indexOf("?");
    return l < c && l >= 0 && (c = -1),
    c > -1 && (s = t.slice(0, c),
    o = t.slice(c + 1, l > -1 ? l : t.length),
    r = e(o)),
    l > -1 && (s = s || t.slice(0, l),
    i = t.slice(l, t.length)),
    s = Mu(s != null ? s : t, n),
    {
        fullPath: s + (o && "?") + o + i,
        path: s,
        query: r,
        hash: i
    }
}
function Cu(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function dr(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function Pu(e, t, n) {
    const s = t.matched.length - 1
      , r = n.matched.length - 1;
    return s > -1 && s === r && kt(t.matched[s], n.matched[r]) && So(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function kt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function So(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!Ru(e[n], t[n]))
            return !1;
    return !0
}
function Ru(e, t) {
    return He(e) ? hr(e, t) : He(t) ? hr(t, e) : e === t
}
function hr(e, t) {
    return He(t) ? e.length === t.length && e.every((n,s)=>n === t[s]) : e.length === 1 && e[0] === t
}
function Mu(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , s = e.split("/");
    let r = n.length - 1, o, i;
    for (o = 0; o < s.length; o++)
        if (i = s[o],
        i !== ".")
            if (i === "..")
                r > 1 && r--;
            else
                break;
    return n.slice(0, r).join("/") + "/" + s.slice(o - (o === s.length ? 1 : 0)).join("/")
}
var Xt;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(Xt || (Xt = {}));
var Kt;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Kt || (Kt = {}));
function ku(e) {
    if (!e)
        if (xt) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    wu(e)
}
const Au = /^[^#]+#/;
function Ou(e, t) {
    return e.replace(Au, "#") + t
}
function Iu(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , s = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: s.left - n.left - (t.left || 0),
        top: s.top - n.top - (t.top || 0)
    }
}
const Nn = ()=>({
    left: window.pageXOffset,
    top: window.pageYOffset
});
function Su(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , s = typeof n == "string" && n.startsWith("#")
          , r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r)
            return;
        t = Iu(r, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}
function pr(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const os = new Map;
function Tu(e, t) {
    os.set(e, t)
}
function Nu(e) {
    const t = os.get(e);
    return os.delete(e),
    t
}
let Fu = ()=>location.protocol + "//" + location.host;
function To(e, t) {
    const {pathname: n, search: s, hash: r} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let l = r.includes(e.slice(o)) ? e.slice(o).length : 1
          , c = r.slice(l);
        return c[0] !== "/" && (c = "/" + c),
        dr(c, "")
    }
    return dr(n, e) + s + r
}
function Lu(e, t, n, s) {
    let r = []
      , o = []
      , i = null;
    const l = ({state: p})=>{
        const _ = To(e, location)
          , k = n.value
          , R = t.value;
        let H = 0;
        if (p) {
            if (n.value = _,
            t.value = p,
            i && i === k) {
                i = null;
                return
            }
            H = R ? p.position - R.position : 0
        } else
            s(_);
        r.forEach(A=>{
            A(n.value, k, {
                delta: H,
                type: Xt.pop,
                direction: H ? H > 0 ? Kt.forward : Kt.back : Kt.unknown
            })
        }
        )
    }
    ;
    function c() {
        i = n.value
    }
    function a(p) {
        r.push(p);
        const _ = ()=>{
            const k = r.indexOf(p);
            k > -1 && r.splice(k, 1)
        }
        ;
        return o.push(_),
        _
    }
    function f() {
        const {history: p} = window;
        !p.state || p.replaceState(J({}, p.state, {
            scroll: Nn()
        }), "")
    }
    function d() {
        for (const p of o)
            p();
        o = [],
        window.removeEventListener("popstate", l),
        window.removeEventListener("beforeunload", f)
    }
    return window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", f),
    {
        pauseListeners: c,
        listen: a,
        destroy: d
    }
}
function gr(e, t, n, s=!1, r=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: s,
        position: window.history.length,
        scroll: r ? Nn() : null
    }
}
function ju(e) {
    const {history: t, location: n} = window
      , s = {
        value: To(e, n)
    }
      , r = {
        value: t.state
    };
    r.value || o(s.value, {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function o(c, a, f) {
        const d = e.indexOf("#")
          , p = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : Fu() + e + c;
        try {
            t[f ? "replaceState" : "pushState"](a, "", p),
            r.value = a
        } catch (_) {
            console.error(_),
            n[f ? "replace" : "assign"](p)
        }
    }
    function i(c, a) {
        const f = J({}, t.state, gr(r.value.back, c, r.value.forward, !0), a, {
            position: r.value.position
        });
        o(c, f, !0),
        s.value = c
    }
    function l(c, a) {
        const f = J({}, r.value, t.state, {
            forward: c,
            scroll: Nn()
        });
        o(f.current, f, !0);
        const d = J({}, gr(s.value, c, null), {
            position: f.position + 1
        }, a);
        o(c, d, !1),
        s.value = c
    }
    return {
        location: s,
        state: r,
        push: l,
        replace: i
    }
}
function Hu(e) {
    e = ku(e);
    const t = ju(e)
      , n = Lu(e, t.state, t.location, t.replace);
    function s(o, i=!0) {
        i || n.pauseListeners(),
        history.go(o)
    }
    const r = J({
        location: "",
        base: e,
        go: s,
        createHref: Ou.bind(null, e)
    }, t, n);
    return Object.defineProperty(r, "location", {
        enumerable: !0,
        get: ()=>t.location.value
    }),
    Object.defineProperty(r, "state", {
        enumerable: !0,
        get: ()=>t.state.value
    }),
    r
}
function Uu(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function No(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Ze = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , Fo = Symbol("");
var mr;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(mr || (mr = {}));
function At(e, t) {
    return J(new Error, {
        type: e,
        [Fo]: !0
    }, t)
}
function ze(e, t) {
    return e instanceof Error && Fo in e && (t == null || !!(e.type & t))
}
const _r = "[^/]+?"
  , Bu = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Vu = /[.+*?^${}()[\]/\\]/g;
function Du(e, t) {
    const n = J({}, Bu, t)
      , s = [];
    let r = n.start ? "^" : "";
    const o = [];
    for (const a of e) {
        const f = a.length ? [] : [90];
        n.strict && !a.length && (r += "/");
        for (let d = 0; d < a.length; d++) {
            const p = a[d];
            let _ = 40 + (n.sensitive ? .25 : 0);
            if (p.type === 0)
                d || (r += "/"),
                r += p.value.replace(Vu, "\\$&"),
                _ += 40;
            else if (p.type === 1) {
                const {value: k, repeatable: R, optional: H, regexp: A} = p;
                o.push({
                    name: k,
                    repeatable: R,
                    optional: H
                });
                const j = A || _r;
                if (j !== _r) {
                    _ += 10;
                    try {
                        new RegExp(`(${j})`)
                    } catch (z) {
                        throw new Error(`Invalid custom RegExp for param "${k}" (${j}): ` + z.message)
                    }
                }
                let I = R ? `((?:${j})(?:/(?:${j}))*)` : `(${j})`;
                d || (I = H && a.length < 2 ? `(?:/${I})` : "/" + I),
                H && (I += "?"),
                r += I,
                _ += 20,
                H && (_ += -8),
                R && (_ += -20),
                j === ".*" && (_ += -50)
            }
            f.push(_)
        }
        s.push(f)
    }
    if (n.strict && n.end) {
        const a = s.length - 1;
        s[a][s[a].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"),
    n.end ? r += "$" : n.strict && (r += "(?:/|$)");
    const i = new RegExp(r,n.sensitive ? "" : "i");
    function l(a) {
        const f = a.match(i)
          , d = {};
        if (!f)
            return null;
        for (let p = 1; p < f.length; p++) {
            const _ = f[p] || ""
              , k = o[p - 1];
            d[k.name] = _ && k.repeatable ? _.split("/") : _
        }
        return d
    }
    function c(a) {
        let f = ""
          , d = !1;
        for (const p of e) {
            (!d || !f.endsWith("/")) && (f += "/"),
            d = !1;
            for (const _ of p)
                if (_.type === 0)
                    f += _.value;
                else if (_.type === 1) {
                    const {value: k, repeatable: R, optional: H} = _
                      , A = k in a ? a[k] : "";
                    if (He(A) && !R)
                        throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);
                    const j = He(A) ? A.join("/") : A;
                    if (!j)
                        if (H)
                            p.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : d = !0);
                        else
                            throw new Error(`Missing required param "${k}"`);
                    f += j
                }
        }
        return f || "/"
    }
    return {
        re: i,
        score: s,
        keys: o,
        parse: l,
        stringify: c
    }
}
function Ku(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const s = t[n] - e[n];
        if (s)
            return s;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}
function $u(e, t) {
    let n = 0;
    const s = e.score
      , r = t.score;
    for (; n < s.length && n < r.length; ) {
        const o = Ku(s[n], r[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(r.length - s.length) === 1) {
        if (yr(s))
            return 1;
        if (yr(r))
            return -1
    }
    return r.length - s.length
}
function yr(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const zu = {
    type: 0,
    value: ""
}
  , qu = /[a-zA-Z0-9_]/;
function Wu(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[zu]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(_) {
        throw new Error(`ERR (${n})/"${a}": ${_}`)
    }
    let n = 0
      , s = n;
    const r = [];
    let o;
    function i() {
        o && r.push(o),
        o = []
    }
    let l = 0, c, a = "", f = "";
    function d() {
        !a || (n === 0 ? o.push({
            type: 0,
            value: a
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: 1,
            value: a,
            regexp: f,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"),
        a = "")
    }
    function p() {
        a += c
    }
    for (; l < e.length; ) {
        if (c = e[l++],
        c === "\\" && n !== 2) {
            s = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            c === "/" ? (a && d(),
            i()) : c === ":" ? (d(),
            n = 1) : p();
            break;
        case 4:
            p(),
            n = s;
            break;
        case 1:
            c === "(" ? n = 2 : qu.test(c) ? p() : (d(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && l--);
            break;
        case 2:
            c === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + c : n = 3 : f += c;
            break;
        case 3:
            d(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && l--,
            f = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${a}"`),
    d(),
    i(),
    r
}
function Qu(e, t, n) {
    const s = Du(Wu(e.path), n)
      , r = J(s, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
    r
}
function Yu(e, t) {
    const n = []
      , s = new Map;
    t = xr({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function r(f) {
        return s.get(f)
    }
    function o(f, d, p) {
        const _ = !p
          , k = Ju(f);
        k.aliasOf = p && p.record;
        const R = xr(t, f)
          , H = [k];
        if ("alias"in f) {
            const I = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const z of I)
                H.push(J({}, k, {
                    components: p ? p.record.components : k.components,
                    path: z,
                    aliasOf: p ? p.record : k
                }))
        }
        let A, j;
        for (const I of H) {
            const {path: z} = I;
            if (d && z[0] !== "/") {
                const oe = d.record.path
                  , ge = oe[oe.length - 1] === "/" ? "" : "/";
                I.path = d.record.path + (z && ge + z)
            }
            if (A = Qu(I, d, R),
            p ? p.alias.push(A) : (j = j || A,
            j !== A && j.alias.push(A),
            _ && f.name && !vr(A) && i(f.name)),
            k.children) {
                const oe = k.children;
                for (let ge = 0; ge < oe.length; ge++)
                    o(oe[ge], A, p && p.children[ge])
            }
            p = p || A,
            (A.record.components && Object.keys(A.record.components).length || A.record.name || A.record.redirect) && c(A)
        }
        return j ? ()=>{
            i(j)
        }
        : Dt
    }
    function i(f) {
        if (No(f)) {
            const d = s.get(f);
            d && (s.delete(f),
            n.splice(n.indexOf(d), 1),
            d.children.forEach(i),
            d.alias.forEach(i))
        } else {
            const d = n.indexOf(f);
            d > -1 && (n.splice(d, 1),
            f.record.name && s.delete(f.record.name),
            f.children.forEach(i),
            f.alias.forEach(i))
        }
    }
    function l() {
        return n
    }
    function c(f) {
        let d = 0;
        for (; d < n.length && $u(f, n[d]) >= 0 && (f.record.path !== n[d].record.path || !Lo(f, n[d])); )
            d++;
        n.splice(d, 0, f),
        f.record.name && !vr(f) && s.set(f.record.name, f)
    }
    function a(f, d) {
        let p, _ = {}, k, R;
        if ("name"in f && f.name) {
            if (p = s.get(f.name),
            !p)
                throw At(1, {
                    location: f
                });
            R = p.record.name,
            _ = J(br(d.params, p.keys.filter(j=>!j.optional).map(j=>j.name)), f.params && br(f.params, p.keys.map(j=>j.name))),
            k = p.stringify(_)
        } else if ("path"in f)
            k = f.path,
            p = n.find(j=>j.re.test(k)),
            p && (_ = p.parse(k),
            R = p.record.name);
        else {
            if (p = d.name ? s.get(d.name) : n.find(j=>j.re.test(d.path)),
            !p)
                throw At(1, {
                    location: f,
                    currentLocation: d
                });
            R = p.record.name,
            _ = J({}, d.params, f.params),
            k = p.stringify(_)
        }
        const H = [];
        let A = p;
        for (; A; )
            H.unshift(A.record),
            A = A.parent;
        return {
            name: R,
            path: k,
            params: _,
            matched: H,
            meta: Zu(H)
        }
    }
    return e.forEach(f=>o(f)),
    {
        addRoute: o,
        resolve: a,
        removeRoute: i,
        getRoutes: l,
        getRecordMatcher: r
    }
}
function br(e, t) {
    const n = {};
    for (const s of t)
        s in e && (n[s] = e[s]);
    return n
}
function Ju(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Xu(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function Xu(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const s in e.components)
            t[s] = typeof n == "boolean" ? n : n[s];
    return t
}
function vr(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function Zu(e) {
    return e.reduce((t,n)=>J(t, n.meta), {})
}
function xr(e, t) {
    const n = {};
    for (const s in e)
        n[s] = s in t ? t[s] : e[s];
    return n
}
function Lo(e, t) {
    return t.children.some(n=>n === e || Lo(e, n))
}
const jo = /#/g
  , Gu = /&/g
  , ef = /\//g
  , tf = /=/g
  , nf = /\?/g
  , Ho = /\+/g
  , sf = /%5B/g
  , rf = /%5D/g
  , Uo = /%5E/g
  , of = /%60/g
  , Bo = /%7B/g
  , lf = /%7C/g
  , Vo = /%7D/g
  , cf = /%20/g;
function As(e) {
    return encodeURI("" + e).replace(lf, "|").replace(sf, "[").replace(rf, "]")
}
function uf(e) {
    return As(e).replace(Bo, "{").replace(Vo, "}").replace(Uo, "^")
}
function is(e) {
    return As(e).replace(Ho, "%2B").replace(cf, "+").replace(jo, "%23").replace(Gu, "%26").replace(of, "`").replace(Bo, "{").replace(Vo, "}").replace(Uo, "^")
}
function ff(e) {
    return is(e).replace(tf, "%3D")
}
function af(e) {
    return As(e).replace(jo, "%23").replace(nf, "%3F")
}
function df(e) {
    return e == null ? "" : af(e).replace(ef, "%2F")
}
function xn(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
function hf(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const s = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < s.length; ++r) {
        const o = s[r].replace(Ho, " ")
          , i = o.indexOf("=")
          , l = xn(i < 0 ? o : o.slice(0, i))
          , c = i < 0 ? null : xn(o.slice(i + 1));
        if (l in t) {
            let a = t[l];
            He(a) || (a = t[l] = [a]),
            a.push(c)
        } else
            t[l] = c
    }
    return t
}
function Er(e) {
    let t = "";
    for (let n in e) {
        const s = e[n];
        if (n = ff(n),
        s == null) {
            s !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (He(s) ? s.map(o=>o && is(o)) : [s && is(s)]).forEach(o=>{
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function pf(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 && (t[n] = He(s) ? s.map(r=>r == null ? null : "" + r) : s == null ? s : "" + s)
    }
    return t
}
const gf = Symbol("")
  , wr = Symbol("")
  , Os = Symbol("")
  , Do = Symbol("")
  , ls = Symbol("");
function jt() {
    let e = [];
    function t(s) {
        return e.push(s),
        ()=>{
            const r = e.indexOf(s);
            r > -1 && e.splice(r, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: ()=>e,
        reset: n
    }
}
function et(e, t, n, s, r) {
    const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return ()=>new Promise((i,l)=>{
        const c = d=>{
            d === !1 ? l(At(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : Uu(d) ? l(At(2, {
                from: t,
                to: d
            })) : (o && s.enterCallbacks[r] === o && typeof d == "function" && o.push(d),
            i())
        }
          , a = e.call(s && s.instances[r], t, n, c);
        let f = Promise.resolve(a);
        e.length < 3 && (f = f.then(c)),
        f.catch(d=>l(d))
    }
    )
}
function $n(e, t, n, s) {
    const r = [];
    for (const o of e)
        for (const i in o.components) {
            let l = o.components[i];
            if (!(t !== "beforeRouteEnter" && !o.instances[i]))
                if (mf(l)) {
                    const a = (l.__vccOpts || l)[t];
                    a && r.push(et(a, n, s, o, i))
                } else {
                    let c = l();
                    r.push(()=>c.then(a=>{
                        if (!a)
                            return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));
                        const f = xu(a) ? a.default : a;
                        o.components[i] = f;
                        const p = (f.__vccOpts || f)[t];
                        return p && et(p, n, s, o, i)()
                    }
                    ))
                }
        }
    return r
}
function mf(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function Cr(e) {
    const t = Qe(Os)
      , n = Qe(Do)
      , s = Re(()=>t.resolve(gt(e.to)))
      , r = Re(()=>{
        const {matched: c} = s.value
          , {length: a} = c
          , f = c[a - 1]
          , d = n.matched;
        if (!f || !d.length)
            return -1;
        const p = d.findIndex(kt.bind(null, f));
        if (p > -1)
            return p;
        const _ = Pr(c[a - 2]);
        return a > 1 && Pr(f) === _ && d[d.length - 1].path !== _ ? d.findIndex(kt.bind(null, c[a - 2])) : p
    }
    )
      , o = Re(()=>r.value > -1 && vf(n.params, s.value.params))
      , i = Re(()=>r.value > -1 && r.value === n.matched.length - 1 && So(n.params, s.value.params));
    function l(c={}) {
        return bf(c) ? t[gt(e.replace) ? "replace" : "push"](gt(e.to)).catch(Dt) : Promise.resolve()
    }
    return {
        route: s,
        href: Re(()=>s.value.href),
        isActive: o,
        isExactActive: i,
        navigate: l
    }
}
const _f = uo({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Cr,
    setup(e, {slots: t}) {
        const n = Gt(Cr(e))
          , {options: s} = Qe(Os)
          , r = Re(()=>({
            [Rr(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
            [Rr(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const o = t.default && t.default(n);
            return e.custom ? o : Oo("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
            }, o)
        }
    }
})
  , yf = _f;
function bf(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function vf(e, t) {
    for (const n in t) {
        const s = t[n]
          , r = e[n];
        if (typeof s == "string") {
            if (s !== r)
                return !1
        } else if (!He(r) || r.length !== s.length || s.some((o,i)=>o !== r[i]))
            return !1
    }
    return !0
}
function Pr(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Rr = (e,t,n)=>e != null ? e : t != null ? t : n
  , xf = uo({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const s = Qe(ls)
          , r = Re(()=>e.route || s.value)
          , o = Qe(wr, 0)
          , i = Re(()=>{
            let a = gt(o);
            const {matched: f} = r.value;
            let d;
            for (; (d = f[a]) && !d.components; )
                a++;
            return a
        }
        )
          , l = Re(()=>r.value.matched[i.value]);
        an(wr, Re(()=>i.value + 1)),
        an(gf, l),
        an(ls, r);
        const c = xs();
        return dn(()=>[c.value, l.value, e.name], ([a,f,d],[p,_,k])=>{
            f && (f.instances[d] = a,
            _ && _ !== f && a && a === p && (f.leaveGuards.size || (f.leaveGuards = _.leaveGuards),
            f.updateGuards.size || (f.updateGuards = _.updateGuards))),
            a && f && (!_ || !kt(f, _) || !p) && (f.enterCallbacks[d] || []).forEach(R=>R(a))
        }
        , {
            flush: "post"
        }),
        ()=>{
            const a = r.value
              , f = e.name
              , d = l.value
              , p = d && d.components[f];
            if (!p)
                return Mr(n.default, {
                    Component: p,
                    route: a
                });
            const _ = d.props[f]
              , k = _ ? _ === !0 ? a.params : typeof _ == "function" ? _(a) : _ : null
              , H = Oo(p, J({}, k, t, {
                onVnodeUnmounted: A=>{
                    A.component.isUnmounted && (d.instances[f] = null)
                }
                ,
                ref: c
            }));
            return Mr(n.default, {
                Component: H,
                route: a
            }) || H
        }
    }
});
function Mr(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Ef = xf;
function wf(e) {
    const t = Yu(e.routes, e)
      , n = e.parseQuery || hf
      , s = e.stringifyQuery || Er
      , r = e.history
      , o = jt()
      , i = jt()
      , l = jt()
      , c = Ti(Ze);
    let a = Ze;
    xt && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const f = Dn.bind(null, y=>"" + y)
      , d = Dn.bind(null, df)
      , p = Dn.bind(null, xn);
    function _(y, M) {
        let C, S;
        return No(y) ? (C = t.getRecordMatcher(y),
        S = M) : S = y,
        t.addRoute(S, C)
    }
    function k(y) {
        const M = t.getRecordMatcher(y);
        M && t.removeRoute(M)
    }
    function R() {
        return t.getRoutes().map(y=>y.record)
    }
    function H(y) {
        return !!t.getRecordMatcher(y)
    }
    function A(y, M) {
        if (M = J({}, M || c.value),
        typeof y == "string") {
            const u = Kn(n, y, M.path)
              , h = t.resolve({
                path: u.path
            }, M)
              , g = r.createHref(u.fullPath);
            return J(u, h, {
                params: p(h.params),
                hash: xn(u.hash),
                redirectedFrom: void 0,
                href: g
            })
        }
        let C;
        if ("path"in y)
            C = J({}, y, {
                path: Kn(n, y.path, M.path).path
            });
        else {
            const u = J({}, y.params);
            for (const h in u)
                u[h] == null && delete u[h];
            C = J({}, y, {
                params: d(y.params)
            }),
            M.params = d(M.params)
        }
        const S = t.resolve(C, M)
          , q = y.hash || "";
        S.params = f(p(S.params));
        const ie = Cu(s, J({}, y, {
            hash: uf(q),
            path: S.path
        }))
          , K = r.createHref(ie);
        return J({
            fullPath: ie,
            hash: q,
            query: s === Er ? pf(y.query) : y.query || {}
        }, S, {
            redirectedFrom: void 0,
            href: K
        })
    }
    function j(y) {
        return typeof y == "string" ? Kn(n, y, c.value.path) : J({}, y)
    }
    function I(y, M) {
        if (a !== y)
            return At(8, {
                from: M,
                to: y
            })
    }
    function z(y) {
        return xe(y)
    }
    function oe(y) {
        return z(J(j(y), {
            replace: !0
        }))
    }
    function ge(y) {
        const M = y.matched[y.matched.length - 1];
        if (M && M.redirect) {
            const {redirect: C} = M;
            let S = typeof C == "function" ? C(y) : C;
            return typeof S == "string" && (S = S.includes("?") || S.includes("#") ? S = j(S) : {
                path: S
            },
            S.params = {}),
            J({
                query: y.query,
                hash: y.hash,
                params: "path"in S ? {} : y.params
            }, S)
        }
    }
    function xe(y, M) {
        const C = a = A(y)
          , S = c.value
          , q = y.state
          , ie = y.force
          , K = y.replace === !0
          , u = ge(C);
        if (u)
            return xe(J(j(u), {
                state: typeof u == "object" ? J({}, q, u.state) : q,
                force: ie,
                replace: K
            }), M || C);
        const h = C;
        h.redirectedFrom = M;
        let g;
        return !ie && Pu(s, S, C) && (g = At(16, {
            to: h,
            from: S
        }),
        ot(S, S, !0, !1)),
        (g ? Promise.resolve(g) : le(h, S)).catch(m=>ze(m) ? ze(m, 2) ? m : Ie(m) : ee(m, h, S)).then(m=>{
            if (m) {
                if (ze(m, 2))
                    return xe(J({
                        replace: K
                    }, j(m.to), {
                        state: typeof m.to == "object" ? J({}, q, m.to.state) : q,
                        force: ie
                    }), M || h)
            } else
                m = me(h, S, !0, K, q);
            return se(h, S, m),
            m
        }
        )
    }
    function D(y, M) {
        const C = I(y, M);
        return C ? Promise.reject(C) : Promise.resolve()
    }
    function le(y, M) {
        let C;
        const [S,q,ie] = Cf(y, M);
        C = $n(S.reverse(), "beforeRouteLeave", y, M);
        for (const u of S)
            u.leaveGuards.forEach(h=>{
                C.push(et(h, y, M))
            }
            );
        const K = D.bind(null, y, M);
        return C.push(K),
        vt(C).then(()=>{
            C = [];
            for (const u of o.list())
                C.push(et(u, y, M));
            return C.push(K),
            vt(C)
        }
        ).then(()=>{
            C = $n(q, "beforeRouteUpdate", y, M);
            for (const u of q)
                u.updateGuards.forEach(h=>{
                    C.push(et(h, y, M))
                }
                );
            return C.push(K),
            vt(C)
        }
        ).then(()=>{
            C = [];
            for (const u of y.matched)
                if (u.beforeEnter && !M.matched.includes(u))
                    if (He(u.beforeEnter))
                        for (const h of u.beforeEnter)
                            C.push(et(h, y, M));
                    else
                        C.push(et(u.beforeEnter, y, M));
            return C.push(K),
            vt(C)
        }
        ).then(()=>(y.matched.forEach(u=>u.enterCallbacks = {}),
        C = $n(ie, "beforeRouteEnter", y, M),
        C.push(K),
        vt(C))).then(()=>{
            C = [];
            for (const u of i.list())
                C.push(et(u, y, M));
            return C.push(K),
            vt(C)
        }
        ).catch(u=>ze(u, 8) ? u : Promise.reject(u))
    }
    function se(y, M, C) {
        for (const S of l.list())
            S(y, M, C)
    }
    function me(y, M, C, S, q) {
        const ie = I(y, M);
        if (ie)
            return ie;
        const K = M === Ze
          , u = xt ? history.state : {};
        C && (S || K ? r.replace(y.fullPath, J({
            scroll: K && u && u.scroll
        }, q)) : r.push(y.fullPath, q)),
        c.value = y,
        ot(y, M, C, K),
        Ie()
    }
    let _e;
    function Oe() {
        _e || (_e = r.listen((y,M,C)=>{
            if (!en.listening)
                return;
            const S = A(y)
              , q = ge(S);
            if (q) {
                xe(J(q, {
                    replace: !0
                }), S).catch(Dt);
                return
            }
            a = S;
            const ie = c.value;
            xt && Tu(pr(ie.fullPath, C.delta), Nn()),
            le(S, ie).catch(K=>ze(K, 12) ? K : ze(K, 2) ? (xe(K.to, S).then(u=>{
                ze(u, 20) && !C.delta && C.type === Xt.pop && r.go(-1, !1)
            }
            ).catch(Dt),
            Promise.reject()) : (C.delta && r.go(-C.delta, !1),
            ee(K, S, ie))).then(K=>{
                K = K || me(S, ie, !1),
                K && (C.delta && !ze(K, 8) ? r.go(-C.delta, !1) : C.type === Xt.pop && ze(K, 20) && r.go(-1, !1)),
                se(S, ie, K)
            }
            ).catch(Dt)
        }
        ))
    }
    let $e = jt(), Tt = jt(), ue;
    function ee(y, M, C) {
        Ie(y);
        const S = Tt.list();
        return S.length ? S.forEach(q=>q(y, M, C)) : console.error(y),
        Promise.reject(y)
    }
    function X() {
        return ue && c.value !== Ze ? Promise.resolve() : new Promise((y,M)=>{
            $e.add([y, M])
        }
        )
    }
    function Ie(y) {
        return ue || (ue = !y,
        Oe(),
        $e.list().forEach(([M,C])=>y ? C(y) : M()),
        $e.reset()),
        y
    }
    function ot(y, M, C, S) {
        const {scrollBehavior: q} = e;
        if (!xt || !q)
            return Promise.resolve();
        const ie = !C && Nu(pr(y.fullPath, 0)) || (S || !C) && history.state && history.state.scroll || null;
        return Gr().then(()=>q(y, M, ie)).then(K=>K && Su(K)).catch(K=>ee(K, y, M))
    }
    const Se = y=>r.go(y);
    let Ee;
    const _t = new Set
      , en = {
        currentRoute: c,
        listening: !0,
        addRoute: _,
        removeRoute: k,
        hasRoute: H,
        getRoutes: R,
        resolve: A,
        options: e,
        push: z,
        replace: oe,
        go: Se,
        back: ()=>Se(-1),
        forward: ()=>Se(1),
        beforeEach: o.add,
        beforeResolve: i.add,
        afterEach: l.add,
        onError: Tt.add,
        isReady: X,
        install(y) {
            const M = this;
            y.component("RouterLink", yf),
            y.component("RouterView", Ef),
            y.config.globalProperties.$router = M,
            Object.defineProperty(y.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>gt(c)
            }),
            xt && !Ee && c.value === Ze && (Ee = !0,
            z(r.location).catch(q=>{}
            ));
            const C = {};
            for (const q in Ze)
                C[q] = Re(()=>c.value[q]);
            y.provide(Os, M),
            y.provide(Do, Gt(C)),
            y.provide(ls, c);
            const S = y.unmount;
            _t.add(y),
            y.unmount = function() {
                _t.delete(y),
                _t.size < 1 && (a = Ze,
                _e && _e(),
                _e = null,
                c.value = Ze,
                Ee = !1,
                ue = !1),
                S()
            }
        }
    };
    return en
}
function vt(e) {
    return e.reduce((t,n)=>t.then(()=>n()), Promise.resolve())
}
function Cf(e, t) {
    const n = []
      , s = []
      , r = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const l = t.matched[i];
        l && (e.matched.find(a=>kt(a, l)) ? s.push(l) : n.push(l));
        const c = e.matched[i];
        c && (t.matched.find(a=>kt(a, c)) || r.push(c))
    }
    return [n, s, r]
}
const Pf = wf({
    history: Hu("/"),
    routes: []
});
const Is = yc(vu);
Is.use(Ec());
Is.use(Pf);
Is.mount("#app");
