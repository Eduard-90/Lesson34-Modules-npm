export { totalSalary, departmentsQuantity, departmentsSalary };

function totalSalary(employees) {
  let sum = 0;
  for (const worker of employees) {
    sum += worker.salary;
  }
  return sum;
}

function departmentsQuantity(employees) {
  const result = new Set();
  for (const employee of employees) {
    result.add(employee.department);
  }
  return result.size;
}

function departmentsSalary(employees) {
  const result = {};
  employees.forEach((employee) => {
    if (!result[employee.department]) {
      result[employee.department] = employee.salary;
    } else {
      result[employee.department] += employee.salary;
    }
  });
  return result;
}
