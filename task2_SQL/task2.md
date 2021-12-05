Запрос a:

Логика :
1.найти всех студентов из таблицы Exams укоторых оценка меньше 3.
2.проверить id студентов в выборке и найти повторения 2 и более. 3. сопоставить id c именем и фамилией в таблице Students. 4. вывести запрос ФИ.

Запрос:

SELECT Students.FirstName, Students.LastName, COUNT(Students.StudentId) as count
FROM Student INNER JOIN Exams
ON Students.StudentId = Exams.StudentId
WHERE Exams.Result < 3
GROUP BY Student.StudentId HAVING count >= 2;

Запрос b:

1. используя id студентов посчитать кол-во таких студентов в группе
2. отсортировать группы где таких студентов больше 10
3. из таблицы Students по id students вывести название группы

Запрос:

SELECT Students.Group COUNT(Students.StudentId) as count, FROM (SELECT Students.FirstName, Students.LastName, COUNT(Students.StudentId) as count
FROM Student INNER JOIN Exams
ON Students.StudentId = Exams.StudentId
WHERE Exams.Result < 3
GROUP BY Student.StudentId HAVING count >= 2;)
HAVING count(distinct student_id) >= 10
