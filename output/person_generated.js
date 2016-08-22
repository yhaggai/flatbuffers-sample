// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Demo = Demo || {};

/**
 * @const
 * @namespace
 */
Demo.Person = Demo.Person || {};

/**
 * @enum
 */
Demo.Person.Department = {
  RnD: 0,
  Product: 1,
  Finance: 2
};

/**
 * @constructor
 */
Demo.Person.Person = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Demo.Person.Person}
 */
Demo.Person.Person.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Demo.Person.Person=} obj
 * @returns {Demo.Person.Person}
 */
Demo.Person.Person.getRootAsPerson = function(bb, obj) {
  return (obj || new Demo.Person.Person).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
Demo.Person.Person.prototype.firstName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
Demo.Person.Person.prototype.lastName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
Demo.Person.Person.prototype.age = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
};

/**
 * @param {Demo.Person.Company=} obj
 * @returns {Demo.Person.Company}
 */
Demo.Person.Person.prototype.company = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? (obj || new Demo.Person.Company).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @returns {Demo.Person.Department}
 */
Demo.Person.Person.prototype.department = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? /** @type {Demo.Person.Department} */ (this.bb.readInt8(this.bb_pos + offset)) : Demo.Person.Department.RnD;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Demo.Person.Person.startPerson = function(builder) {
  builder.startObject(5);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} firstNameOffset
 */
Demo.Person.Person.addFirstName = function(builder, firstNameOffset) {
  builder.addFieldOffset(0, firstNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} lastNameOffset
 */
Demo.Person.Person.addLastName = function(builder, lastNameOffset) {
  builder.addFieldOffset(1, lastNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} age
 */
Demo.Person.Person.addAge = function(builder, age) {
  builder.addFieldInt16(2, age, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} companyOffset
 */
Demo.Person.Person.addCompany = function(builder, companyOffset) {
  builder.addFieldOffset(3, companyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Demo.Person.Department} department
 */
Demo.Person.Person.addDepartment = function(builder, department) {
  builder.addFieldInt8(4, department, Demo.Person.Department.RnD);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Demo.Person.Person.endPerson = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Demo.Person.Person.finishPersonBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @constructor
 */
Demo.Person.Company = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Demo.Person.Company}
 */
Demo.Person.Company.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Demo.Person.Company=} obj
 * @returns {Demo.Person.Company}
 */
Demo.Person.Company.getRootAsCompany = function(bb, obj) {
  return (obj || new Demo.Person.Company).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
Demo.Person.Company.prototype.companyName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
Demo.Person.Company.prototype.companyStreetName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
Demo.Person.Company.prototype.streetNumber = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt16(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Demo.Person.Company.startCompany = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} companyNameOffset
 */
Demo.Person.Company.addCompanyName = function(builder, companyNameOffset) {
  builder.addFieldOffset(0, companyNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} companyStreetNameOffset
 */
Demo.Person.Company.addCompanyStreetName = function(builder, companyStreetNameOffset) {
  builder.addFieldOffset(1, companyStreetNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} streetNumber
 */
Demo.Person.Company.addStreetNumber = function(builder, streetNumber) {
  builder.addFieldInt16(2, streetNumber, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Demo.Person.Company.endCompany = function(builder) {
  var offset = builder.endObject();
  return offset;
};

// Exports for Node.js and RequireJS
this.Demo = Demo;