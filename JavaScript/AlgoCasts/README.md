# AlgoCasts

Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)

##### string reverse

使用したメソッド

- `split()`: 文字列を配列にするメソッド
- `reverse()`: 配列の順番を逆にするメソッド
- `join()`: 配列を文字列にするメソッド
- `reduce`: 第二引数が初期値で、初期値に対して第一引数の値を処理する。

なるべく `for(let i = 0; i < a.length; i++){}`の形は避ける。`for of`や`for in`を使用して複雑性を避ける

##### palindrome

- `every`: 配列が条件が全て ture の場合、true を返す
- `some`: 配列が条件を一つ以上満たしていれば true を返す

##### int reverse

- `Math.sing(n)`: パラーメータの数値が＋の時 1 を、-の時に-1 を返す。

##### maxChar

```
// 下記のような分岐もできる
for(let char of str) {
  chars[char] = chars[char] + 1 || 1;
}
```

##### capitalize

- `slice(start, end)`: 配列の開始位置から、終了位置までの値を取得する。

##### vowels

- `条件.includes(対象)`: 対象の文字列または配列が条件と合致した場合、true を返す。
- `str.match(/regexp/)`: 条件にマッチした値を配列として返す
- 正規表現：`/[aiueo]gi/`
  - []の条件にあてはまるか
  - `g`は最後まで処理を行う。指定しない場合、最初に合致した時点で処理が終わる。
  - `i`を指定しない場合、[]内で定義した定義(ここでは小文字)で処理を判定する。指定した場合、大文字も含む。

##### anagrams
- `文字列.replace(正規表現)` 文字列を指定内容に置換する
- `文字列配列.sort()` アルファベット順に配列が並ぶ
- 正規表現: `/[^w/g]/`
 - `^` 入力の先頭にマッチする
 - `w` アンダースコアを含むあらゆる半角英数字（基本ラテンアルファベット）にマッチする。[A-Za-z0-9_] に相当する


```js
const countVals = {};
for(let val of string.replace(/[^\w]/g).toLowerCase()) {
  // Mapに存在しない場合は1を、存在する場合は1を足したものを代入する
  countVals[val] = countVals[val] + 1 || 1;
}
```