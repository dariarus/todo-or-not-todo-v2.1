### ToDo-лист "ToDo-or-not-ToDo". Версия 2.1

#### Описание и функциональность: 
Небольшая приложение для управления задачами. 
* Через форму можно добавить новую задачу, а по желанию - отметить ее как важную и добавить описание. 

* Задачи можно фильтровать по статусу: доступен просмотр всех задачи, невыполненных и выполненных. У каждой задачи можно поменять статус: 

а) невыполненную можно пометить выполненной - это действие доступно как из списка всех задач, так и из списка невыполненных;

б) выполненную задачу можно вернуть обратно в список невыполненных - действие так же доступно из списка всех задач и из списка выполненных.

* Любую задачу можно удалить по клику на крестик. 

* Можно менять порядок задач перетаскиванием.

* Есть возможность поиска задач по имени/описанию. Поле для поиска появляется, только если создана хотя бы одна задача.

* Есть возможность отмечать задачи как важные.
Это можно сделать как при создании задачи, так и нажав на звездочку справа от названия уже созданной задачи.

* Есть возможность редактировать существующие задачи.
Для этого нужно нажать на карандашик справа от названия.
Откроется попап, в котором можно изменить название, описание, поставить или снять отметку "Выполненная" и поставить или снять отметку "Важная". 

* Для каждой задачи отображается дата добавления ее в список.
Если задача отмечена как выполненная, то отображается дата выполнения.

* Есть возможность сортировать созданные задачи по названию, важности или дате добавления/выполнения.
Настройка сортировки открывается в виде "аккордеона" по нажатию на иконку "Настройки", которая появляется справа от списка фильтров, если добавлена хотя бы одна задача.

а) По названию: доступна сортировка по алфавиту от А до Я и от Я до А.

б) По важности: можно показывать сначала важные или сначала неважные задачи

в) По дате: доступно два варианта. Первый - по дате добавления задачи в список; применить можно из списка всех задач и из списка невыполненных. Второй - по дате выполнения; применяется только к списку выполненных задач.

Одновременно доступен только один вид сортировки.

Если происходят любые изменения в списке задач, сортировка не сбрасывается.

* Есть возможность сохранять созданные задачи в localStorage и не терять список при перезагрузке страницы.
В хранилище попадают также и все изменения, производимые со списком задач, включая добавление, удаление и сортировку перетаскиванием.

*Изменения в версии 2.1:*
- весь основной функционал покрыт unit-тестами
- протестировано хранилище MobX

#### Используемые технологии: 
* React
* TSX
* React Hook
* MobX
* react-dnd
* flexbox
* БЭМ
* JavaScript
* TypeScript
* Vite
* vitest
* react-testing-library
* react-testing-library/jest-dom

#### В разработке: 
* возможность указать дату дедлайна при создании или редактировании задачи;
* возможность сортировать задачи по ближайшей дате дедлайна;
* возможность подтверждать действие при удалении задачи;
* возможность удалить сразу все задачи;
* возможность вернуть изначальные настройки сортировки по нажатию на кнопку "Сбросить";
* адаптив.

#### Инструкция по запуску приложения:

1). Клонировать репозиторий :
```
git clone git@github.com:dariarus/todo-or-not-todo-v2.1.git
```

2). Перейти в папку с проектом:
```shell
cd todo-or-not-todo-v2.1
```

3). Запустить приложение:
```shell
npm install
npm run start
```

4). Открыть приложение в браузере по адресу:
http://localhost:3000/todo-or-not-todo-v2.1/

#### Ссылка на страницу приложения на GitHub Pages:
[ToDo-2.1](https://dariarus.github.io/todo-or-not-todo-v2.1/)

#### Предыдущие версии приложения:
1. Базовая версия:

[Посмотреть репозиторий](https://github.com/dariarus/todo-or-not-todo)

[Посмотреть на GitHub Pages](https://dariarus.github.io/todo-or-not-todo/)

2. Версия 2.0:

[Посмотреть репозиторий](https://github.com/dariarus/todo-or-not-todo-v2)

[Посмотреть на GitHub Pages](https://dariarus.github.io/todo-or-not-todo-v2/)
