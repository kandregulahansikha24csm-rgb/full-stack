// Assignment 1: Inheritance Types using JavaScript
// Run using Node.js
console.log("==============================================");
console.log(" INHERITANCE TYPES USING JAVASCRIPT");
console.log("==============================================\n");
// 1. SINGLE INHERITANCE
console.log("1. SINGLE INHERITANCE");
console.log("----------------------------------------------");
class Person {
introduce() {
console.log("Person: I can introduce myself.");
}
}
class Student extends Person {
study() {
console.log("Student: I can study.");
}
}
const student = new Student();
student.introduce();
student.study();
// 2. MULTILEVEL INHERITANCE
console.log("\n2. MULTILEVEL INHERITANCE");
console.log("----------------------------------------------");
class Vehicle {
start() {
console.log("Vehicle: Engine started.");
}
}
class Car extends Vehicle {
drive() {
console.log("Car: I can drive.");
}
}
class ElectricCar extends Car {
charge() {
console.log("Electric Car: Battery is charging.");
}
}
const electricCar = new ElectricCar();
electricCar.start();
electricCar.drive();
electricCar.charge();
// 3. HIERARCHICAL INHERITANCE
console.log("\n3. HIERARCHICAL INHERITANCE");
console.log("----------------------------------------------");
class Shape {
display() {
console.log("Shape: This is a geometric shape.");
}
}
class Circle extends Shape {
drawCircle() {
console.log("Circle: Drawing a circle.");
}
}
class Rectangle extends Shape {
drawRectangle() {
console.log("Rectangle: Drawing a rectangle.");
}
}
const circle = new Circle();
const rectangle = new Rectangle();
circle.display();

circle.drawCircle();
rectangle.display();
rectangle.drawRectangle();
// 4. MULTIPLE INHERITANCE USING MIXINS
console.log("\n4. MULTIPLE INHERITANCE USING MIXINS");
console.log("----------------------------------------------");
class Coder {
coding() {
console.log("Coder: I can write programs.");
}
}
const Communicator = {
communicate() {
console.log("Communicator: I can communicate.");
}
};
class Developer extends Coder {
develop() {
console.log("Developer: I can develop applications.");
}
}
Object.assign(Developer.prototype, Communicator);
const developer = new Developer();
developer.coding();
developer.communicate();
developer.develop();
// 5. HYBRID INHERITANCE
console.log("\n5. HYBRID INHERITANCE");
console.log("----------------------------------------------");
class Employee {
work() {
console.log("Employee: I can perform my work.");
}
}
class Programmer extends Employee {
program() {
console.log("Programmer: I can write code.");
}
}
class Manager extends Employee {
manage() {
console.log("Manager: I can manage a team.");
}
}
const LeaderSkills = {
lead() {
console.log("Leader: I can lead a team.");
}
};
class TechnicalManager extends Programmer {
manageProjects() {
console.log("Technical Manager: I can manage technical projects.");
}
}
Object.assign(TechnicalManager.prototype, LeaderSkills);
const technicalManager = new TechnicalManager();
technicalManager.work();
technicalManager.program();
technicalManager.manageProjects();
technicalManager.lead();
console.log("\n==============================================");
console.log(" ALL INHERITANCE TYPES COMPLETED");
console.log("==============================================");