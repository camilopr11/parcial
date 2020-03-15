export default {
  created() {
    this.storage();
  },
  data() {
    return {
      enEdicion: false,
      opciones_listaId: [
        { value: null, text: "Seleccione el tipo de identificacion", disabled: true },
        { value: "CC", text: "CC" },
        { value: "CE", text: "CE" },
        { value: "RN", text: "RN" },
        { value: "TI", text: "TI" }
      ],
      id: '',
      tipoid: '',
      nombres: '',
      apellidos: '',
      correo: '',
      peso: '',
      estatura: '',
      imc: '',
      edit: false,
      delete: false,
      cancel: false,
      id2: 0,
      ind: 0,
      estado: '',
      existe: false,
      usuarios: [],

    };
  },
  methods: {
    addUser: function () {
      this.existe = false;
      this.imc = (parseFloat(this.peso)) / ((parseFloat(this.estatura)) * (parseFloat(this.estatura))) + " ";
      for (var i = 0; i < this.usuarios.length; i+=1) {
        if (this.usuarios[i].id === this.id){
          this.existe = true;
        }
      }
      if (this.existe === false){
        this.usuarios.push({

          id: this.id,
          tipoid: this.tipoid,
          nombres: this.nombres,
          apellidos: this.apellidos,
          correo: this.correo,
          peso: this.peso,
          estatura: this.estatura,
          imc: this.imc
        });
        localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
        this.id = '';
        this.tipoid = '';
        this.nombres = '';
        this.apellidos = '';
        this.correo = '';
        this.peso = '';
        this.estatura = '';
        this.imc = '';
      }else{
        this.estado = '';
        this.$bvModal.msgBoxOk('Este usuario ya existe, ingrese otra id', {
          title: 'ALERTA:',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
          })
      }
      

    },
    editUser: function (t, i) {
      this.enEdicion = true;
      this.edit = !this.edit;
      this.id = t.id;
      this.tipoid = t.tipoid;
      this.nombres = t.nombres;
      this.apellidos = t.apellidos;
      this.correo = t.correo;
      this.peso = t.peso;
      this.estatura = t.estatura;
      this.imc = t.imc;
      this.ind = i;
    },
    updateUser: function (e) {
      e.preventDefault();
      this.enEdicion = false;
      this.edit = !this.edit;
      this.imc = (parseFloat(this.peso)) / ((parseFloat(this.estatura)) * (parseFloat(this.estatura))) + " ";
      let usersdb = {

        id: this.id,
        tipoid: this.tipoid,
        nombres: this.nombres,
        apellidos: this.apellidos,
        correo: this.correo,
        peso: this.peso,
        estatura: this.estatura,
        imc: this.imc
      }
      this.usuarios[this.ind] = usersdb;

      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      let usersDB = JSON.parse(localStorage.getItem('usuarios'));
      this.usuarios = usersDB;


      this.id = '';
      this.tipoid = '';
      this.nombres = '';
      this.apellidos = '';
      this.correo = '';
      this.peso = '';
      this.estatura = '';
      this.imc = '';
    },
    cancelTask: function (e) {
      e.preventDefault();
      this.id = '';
      this.tipoid = '';
      this.nombres = '';
      this.apellidos = '';
      this.correo = '';
      this.peso = '';
      this.estatura = '';
      this.imc = '';
      this.edit = !this.edit;
      this.enEdicion = false;
    },
    deleteUser: function (i) {
      this.usuarios.splice(i, 1);
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    },
    status: function (t, i) {
      this.imc = t.imc;
      if (parseFloat(this.imc) < 18.5) {
        this.estado = '';
        this.$bvModal.msgBoxOk('Peso insuficiente', {
          title: 'AVISO:',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
          })
      } else if ((parseFloat(this.imc) >= 18.5) && (parseFloat(this.imc) <= 24.9)) {
        this.estado = '';
        this.$bvModal.msgBoxOk('Peso normal', {
          title: 'AVISO:',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
          })


      } else if ((parseFloat(this.imc) >= 25.0) && (parseFloat(this.imc) <= 29.9)) {
        this.estado = '';
        this.$bvModal.msgBoxOk('Sobrepeso', {
          title: 'AVISO:',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
          })
          
      }else if (parseFloat(this.imc) >= 30.0) {
        this.estado = '';
        this.$bvModal.msgBoxOk('Obesidad', {
          title: 'AVISO:',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
          })

      }


    },
    storage() {
      if (process.browser) {
        let usersDB = JSON.parse(localStorage.getItem('usuarios'));
        if (usersDB === null) {
          this.usuarios = [];

        } else {
          this.usuarios = usersDB;

        }
      }
    }
  },
};