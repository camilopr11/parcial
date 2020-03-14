export default {
    data() {
        return {
            mensaje: "CRUD De Usuarios",
            enEdicion: false,
            usuario: {
                id: "",
                tipoid: "",
                nombres: "",
                apellidos: "",
                correo: "",
                peso: "",
                estatura: "",
                imc: "",
                acciones: true
            },
            lista_usuarios: [
                {
                    id: "1193442227",
                    tipoid: "CC",
                    nombres: "Camilo Andres",
                    apellidos: "Pastrana Rivas",
                    correo: "camilop.rivas@gmail.com",
                    peso: "85",
                    estatura: "1.67",
                    imc: "",
                    acciones: true
                }
              ],
              opciones_listaId: [
                { value: null, text: "Seleccione el tipo de identificacion", disabled: true },
                { value: "CC", text: "CC" },
                { value: "CE", text: "CE" },
                { value: "RN", text: "RN" },
                { value: "TI", text: "TI" }
            ],

              opciones_estados: [
                { value: null, text: "Seleccione el tipo de estado", disabled: true },
                { value: "Sobrepeso", text: "Sobrepeso" },
                { value: "Peso normal", text: "Peso normal" }
                
            ]
            
        };
    },
    methods: {
        crearUsuario() {
            this.usuario.imc = (parseFloat(this.usuario.peso))/((parseFloat(this.usuario.estatura))*(parseFloat(this.usuario.estatura))) + " ";
            this.lista_usuarios.push(this.usuario);
            
        },
        eliminarUsuario({ item }) {
            let posicion = this.lista_usuarios.findIndex(
                usuario => usuario.id == item.id
            );
            this.lista_usuarios.splice(posicion, 1);
        },
        cargarUsuario({ item }) {
            let task = this.lista_usuarios.find(
                usuario => usuario.id == item.id
            );
            this.enEdicion = true;
            this.usuario = Object.assign({}, task);
            this.usuario.imc = (parseFloat(this.usuario.peso))/((parseFloat(this.usuario.estatura))*(parseFloat(this.usuario.estatura))) + " ";
        },
        actualizarUsuario() {
            let posicion = this.lista_usuarios.findIndex(
                usuario => usuario.id == this.usuario.id
            );
            this.usuario.imc = (parseFloat(this.usuario.peso))/((parseFloat(this.usuario.estatura))*(parseFloat(this.usuario.estatura))) + " ";
            this.lista_usuarios.splice(posicion, 1, this.usuario);
            this.usuario = {
                id: "",
                tipoid: "",
                nombres: "",
                apellidos: "",
                correo: "",
                peso: "",
                estatura: "",
                imc: "",
                acciones: true
            };

        }
    }
};