function Consultorio(_nombre, _pacientes) {
  this.nombre = _nombre;
  this.pacientes = _pacientes || [];

  Consultorio.prototype.getNombre = function() {
  return this.nombre;
  }
  Consultorio.prototype.setNombre = function (nuevoNombre){
    this._nombre = nuevoNombre;
  }
  Consultorio.prototype.getPaciente = function() {
    return this.paciente;
    }
  Consultorio.prototype.setPaciente = function (nuevoPaciente){
    this._paciente = nuevoPaciente;
  }
}
Consultorio.prototype.getNombre = function() {
  return this._getNombre; }
Consultorio.prototype.setNombre = function(nuevoNombre) { 
 this._setNombre = nuevoNombre; }

Consultorio.prototype.getPacientes = function() { 
 return this._getPacientes; }
Consultorio.prototype.setPacientes = function(nuevoPaciente) { 
 this._setPacientes = nuevoPaciente; }