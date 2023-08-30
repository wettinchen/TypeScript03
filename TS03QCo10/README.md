## TypeScript 03
## Chapter 03: Objects, Array, Tuples and Enums
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Getting Started
        在 terminal 輸入 tsc -w

###  4. Array Type Inference
        宣告 stringArray, guitars, mixedData，觀察陣列的類型推論

###  5. Array Assignment
        stringArray 的類別為 string
        (1)指派 stringArray 的元素為 number，顯示錯誤
        (2)指派 stringArray 的元素為 string，正常顯示
        (3)向後推入 number 元素至 stringArray，顯示錯誤
        (4)向後推入 string 元素至 stringArray，正常顯示
        guitars 的類別為 string 或 number
        (5)指派 guitars 的元素為 number，正常顯示
        (6)向前推入 string 元素至 guitars，正常顯示
        (7)指派 stringArray 為 guitars，聯集類別不可指派給 string 類別
        (8)指派 guitars 為 stringArray，string 類別可以指派給聯集類別
        mixedData 的類別為 string, number 或 boolean
        (9)指派 mixedData 為 guitars，
        string 或 number聯集類別可以指派給 string, number 或 boolean聯集類別
        (10)指派 guitars 為 stringArray，
        string, number 或 boolean聯集類別不可指派給 string 或 number聯集類別


###  6. Array Any Type & Explicit Types
        (1)宣告 test 為 空陣列，test 類別為 any
        (2)宣告 band 為限定 string 類別的空陣列
        (3)向後推入 string 至 band 陣列
        (4)向後推入 boolean 至 band 陣列

###  7. Tuples
        (1)宣告 myTuple，類別為數組 [string, number, boolean]
        (2)宣告 mixed，類別為聯集類別的陣列 (string | number | boolean)[]
        (3)指派 mixed 為 myTuple，
        數組可以指派給聯集類別的陣列
        (4)指派 myTuple 為 mixed，
        聯集類別的陣列不可指派給數組
        (5)不可指派 number 給 undefined元素
        (6)不可指派 number 給 boolean元素
        (7)可以指派 number 給 number元素

###  8. Object Type
        (1)宣告 myObj 類別為 object，myObj 為 空陣列，
        在控制台載入 myObj 類別
        (2)宣告 myObj 類別為 object，myObj 為 bands
        (3)宣告 myObj 類別為 object，myObj 為 空物件

###  9. Object Type Inference
        (1)宣告 exampleObj，prop1 為 Dave，prop2 為 true，設定 prop2 為 number
        (2)設定 prop2 為 boolean
        (3)設定 prop1 為 number
        (4)設定 prop2 為 string
        (5)設定 prop2 為 boolean
        
### 10. Object Type Annotation
        設定 Guitarist 類型，
        name 為 string，active 為 boolean，
        albums 為有 string 或 number 元素的 array
        宣告 evh 物件的類型為 Guitarist 類型，
        物件的屬性(key) 同樣為 name, active, albums

### 11. Object Assignment
        (1)宣告 jp 物件的類型為 Guitarist 類型，
        物件的屬性(key) 同樣為 name, active, albums
        設定 evh 為 jp
        (2)宣告 jp 物件沒有指派類型，
        物件的屬性(key) 僅為 name, albums
        設定 evh 為 jp，會顯示錯誤
        (3)不能設定不存在的物件 屬性(key)，會顯示錯誤

### 12. Optional Object Properties
        設定 Guitarist 類型的物件屬性(key) active 為選擇性的物件屬性 boolean 或 undefined，
        移除 jp 物件的屬性(key) active，
        設定 evh 為 jp，不會顯示錯誤

### 13. Object Type as a Parameter
        宣告 greetGuitarist，
        設定參數和類別，回傳文字模板，
        在控制台載入結果

### 14. type vs. interface
        示範如何使用 interface

### 15. Narrowing with Optional Properties
        (1)設定 Guitarist 類型的物件屬性(key) name 為 選擇性的物件屬性 string 或 undefined，
        修改文字版模使用選擇性的屬性
        (2)文字版模不使用選擇性的屬性會顯示錯誤
        (3)使用 ifelse迴圈觀察物件屬性(key) name存在的結果
        (4)使用 ifelse迴圈觀察物件屬性(key) name不存在的結果

### 16. Enums
        (1)使用 Enums，設定 Grade 物件，
        在控制台載入結果
        (2)設定 Grade 物件，物件屬性(key) U 的值為 1
        在控制台載入結果