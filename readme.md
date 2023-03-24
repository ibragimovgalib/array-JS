> * # Array
> * # Array methods
> * # Destructuring, spread and rest.


>> **Массив — это объект, который содержит значения (любого типа), не относящиеся конкретно к именованным.
свойства/ключи, а скорее в позиции с числовым индексом
В JavaScript массив — это упорядоченный список значений. Каждое значение называется
элемент, указанный индексом. ... Во-первых, массив может содержать значения смешанных
типы.**

## Создание массива

#### _1. Использование литерала_ массива
```
const array_name = [item1, item2, ...];
```
#### _2. Использование нового ключевого слова_
```
const array2 = new Array("eat", "sleep");
```


## ИЗМЕНИТЬ ЭЛЕМЕНТЫ В МАССИВЕ

#### _Вы также можете добавлять элементы или изменять элементы, обращаясь к индексу_

![img](/)


#### _Предположим, массив состоит из двух элементов. Если вы попытаетесь добавить элемент с индексом 3 (четвертый элемент), третий элемент будет неопределенным. Например:_

![img](/)



## МЕТОДЫ МАССИВА


|   |  |
| ------------- |:-------------:|
| **pop()**      | _**удаляет** последний элемент_ |
| **push()**      | _**добавляет** один или более элементов в конец_ |
| **shift()**      | _**удаляет** первый элемент_ |
| **unshift**      | _**добавляет** один или более элементов в начало_ |
| **toString()**      | _**преобразует** объект в строковое представление_ |
| **splice**      | _**изменяет** содержимое массива, удаляя существующие элементы и/или добавляя новые._ |
| **slice()**      | _**возвращает** новый массив, содержащий копию части исходного массива._ |
| **reverse()**      | _первый элемент массива становится последним, а последний — первым_ |
| **concat()**      | _**объединеняет** двух, или более массивов в один_ |
| **join()**      | _**объединяет** все элементы массива в строку_ |
| **map()**      | _позволяет **трансформировать** один массив в другой при помощи **callback**_ |
| **filter**      | _позволяет получить новый массив, **отфильтровав** все элементы с помощью переданной **callback**_ |
| **find()**      | _**возвращает значение первого найденного** в массиве элемента, которое удовлетворяет условию переданному в **callback**_ |
| **reduce()**      | _позволяет превратить массив в любое другое значение с помощью переданной **callback**_ |
| **forEach()**      | _выполняет функцию **callback** один раз для каждого элемента_ |
| **sort()**      | _на месте сортирует элементы массива и возвращает отсортированный массив_ |
| **indexOf()**      | _**возвращает первый индекс**, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет_ |
| **includes()**      | _определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого **true или false**_ |

