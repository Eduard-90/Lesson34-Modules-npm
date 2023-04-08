"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalSalary = totalSalary;
exports.departmentsQuantity = departmentsQuantity;
exports.departmentsSalary = departmentsSalary;

function totalSalary(employees) {
  var sum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = employees[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var worker = _step.value;
      sum += worker.salary;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sum;
}

function departmentsQuantity(employees) {
  var result = new Set();
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = employees[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var employee = _step2.value;
      result.add(employee.department);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result.size;
}

function departmentsSalary(employees) {
  var result = {};
  employees.forEach(function (employee) {
    if (!result[employee.department]) {
      result[employee.department] = employee.salary;
    } else {
      result[employee.department] += employee.salary;
    }
  });
  return result;
}