CREATE TABLE IF NOT EXISTS Emp (
  EmpID INT PRIMARY KEY AUTO_INCREMENT,
  EmpName VARCHAR(100) NOT NULL,
  EmpDepartment VARCHAR(100) NOT NULL
);

INSERT INTO Emp (EmpName, EmpDepartment) VALUES
  ('Vaibhav', 'HR'),
  ('Prateek', 'QA'),
  ('Akhilesh', 'Engineering');
