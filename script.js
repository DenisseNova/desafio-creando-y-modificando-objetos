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
    return this.pacientes;
    }
  Consultorio.prototype.setPaciente = function (nuevoPaciente){
    this._pacientes = nuevoPaciente;
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

Consultorio.prototype.agregarPaciente = function (pacienteFinal){
  this._paciente.push(pacienteFinal);
}

//var nuevoConsultorio = new Consultorio('Mi nuevo consultorio', []);

var nuevoPaciente1 = new Paciente('Maria', 29, '11.111.111-1', 'Ser fabuloso');
var nuevoPaciente2 = new Paciente('miguel', 13, '11.111.111-2', 'Ser Aburrido');
var nuevoPaciente3 = new Paciente('Tamara', 22, '11.111.111-3', 'Ser Aburrido 2');
var nuevoPaciente4 = new Paciente('Nicolas', 50, '11.111.111-4', 'Ser Aburrido 3');

var pacientes = [nuevoPaciente1, nuevoPaciente2, nuevoPaciente3, nuevoPaciente4];
nuevoConsultorio.setPacientes(pacientes)