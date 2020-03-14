<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <b-row cols="2">
        <b-col>
          <b-card title="Gestión de usuarios">
            <b-img left="3px" src="@/static/images/engineer.png" width="80" height="80"></b-img>
            <b-card-text>A continuación complete todos los campos y presione crear usuario para agregar uno nuevo o modificar / eliminar según lo requiera:</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearUsuario()">
              <br>
              <b-form-group label="Identificación" label-for="id">
              <b-form-select v-model="usuario.tipoid" :options="opciones_listaId"></b-form-select>
              <br>
             <br>
                
                <b-form-input
                  class="form-control"
                  type="number"
                  v-model="usuario.id"
                  placeholder="Ingrese Id de usuario"
                  id="id"
                />
              </b-form-group>

              <b-form-group label="Nombres" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="usuario.nombres"
                  placeholder="Ingrese nombres"
                  id="id"
                />
              </b-form-group>

              <b-form-group label="Apellidos" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="usuario.apellidos"
                  placeholder="Ingrese apellidos"
                  id="id"
                />
              </b-form-group>

              <b-form-group label="Correo" label-for="id">
                <b-form-input
                  class="form-control"
                  type="email"
                  v-model="usuario.correo"
                  placeholder="Ingrese correo"
                  id="id"
                />
              </b-form-group>

              <b-form-group label="Peso" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number" step="0.01"
                  v-model="usuario.peso"
                  placeholder="Ingrese peso (kg)"
                  id="id"
                />
              </b-form-group>

              <b-form-group label="Estatura" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number" step="0.01"
                  v-model="usuario.estatura"
                  placeholder="Ingrese estatura (metros)"
                  id="id"
                />
              </b-form-group>

  
            

             

              <br />
              <br />

              <b-button type="submit" variant="danger" v-if="!enEdicion">Crear Usuario</b-button>

              <b-button @click="actualizarUsuario()" variant="primary" v-else>Actualizar</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col>
          <b-table striped hover :items="lista_usuarios">
            <template v-slot:cell(acciones)="row">
              <b-button
                size="sm"
                @click="cargarUsuario(row)"
                class="mr-2"
                variant="warning"
              >Modificar</b-button>
              <br>
              <br>
              <b-button
                size="sm"
                @click="eliminarUsuario(row)"
                class="mr-2"
                variant="danger"
              >Eliminar</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="../assets/crud.js"/>