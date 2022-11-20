function SourceError(sourceError) {
  this.pointer = sourceError.pointer;
  this.attribute = sourceError.attribute;
}

module.exports = SourceError;
