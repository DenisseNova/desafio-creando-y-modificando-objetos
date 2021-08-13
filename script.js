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

function Paciente (_nombreP, _edad = 0, _rut, _diagnostico){
  this.nombreP = _nombreP;
  this.edad = _edad;
  this.rut = _rut;
  this.diagnostico = _diagnostico;

  Paciente.prototype.getNombre = function() {
    return this._getNombre; 
  }
  Paciente.prototype.setNombre = function(nuevoNombre) { 
    this._setNombre = nuevoNombre; 
  }
  Paciente.prototype.getEdad = function() {
    return this._getEdad; 
  }
  Paciente.prototype.setEdad = function(nuevaEdad) { 
    this._setEdad = nuevaEdad; 
  }
  Paciente.prototype.getRut = function() {
    return this._getRut; 
  }
  Paciente.prototype.setRut = function(nuevoRut) { 
    this._setRut = nuevoRut; 
  }
  Paciente.prototype.getDiagnostico = function() {
    return this._getRut; 
  }
  Paciente.prototype.setDiagnostico = function(nuevoDiagnostico) { 
    this._setDiagnostico = nuevoDiagnostico; 
  }
}