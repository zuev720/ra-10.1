[![Build status](https://ci.appveyor.com/api/projects/status/8iqmqxaodvumrrsi?svg=true)](https://ci.appveyor.com/project/zuev720/ra-10-1)


[GitHub-pages](https://zuev720.github.io/ra-10.1/)



Данный проект не предполагает взаимодействия по протоколу HTTP и наличия серверной части.

Взяв за основу проект, рассмотренный на лекции, доработайте его следующим образом (либо напишите с нуля):

1. По умолчанию показывается форма добавления (при заполнении и нажатии на кнопку Save) происходит добавление элемента в список:

![](https://github.com/netology-code/ra16-homeworks/raw/master/redux/editing/assets/add.png)

2. При нажатии на кнопку редактировать форма автоматически заполняется данными элемента

![](https://github.com/netology-code/ra16-homeworks/raw/master/redux/editing/assets/edit.png)

Далее возможны два сценария:

2.1 Если пользователь нажал на кнопку Save, запись в таблице обновляется

2.2 Если пользователь нажал на кнопку Cancel, то поля вычищаются и снова отображается форма добавления

3. Предложите вариант реализации возможности фильтрации: т.е. у вас должно быть строковое поле, при введении данных в которое, будут отображаться только объекты, у которых название содержит введённую строку. Предложите собственную реализацию данной функциональности.

Обратите внимание:
1. При пустом значении фильтра должны показываться все объекты
1. Неважно, заполнен фильтр или нет - все функции редактирования (добавление/обновление/удаление) должны быть доступны
