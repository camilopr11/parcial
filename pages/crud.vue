<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <b-row cols="2">
        <b-col>
          <b-card title="Gestión de usuarios">
            <b-img left="3px" src="@/static/images/engineer.png" width="80" height="80"></b-img>
            <b-card-text>A continuación complete todos los campos y presione crear usuario para agregar uno nuevo o modificar / eliminar según lo requiera:</b-card-text>

            <b-form action="javascript:void(0)" @submit="addUser()">
              <br>
              <b-form-group label="Identificación" label-for="ide">
              <b-form-select v-model="tipoid" :options="opciones_listaId"></b-form-select>
              <br>
             <br>
                
                <b-form-input
                  class="form-control"
                  type="number"
                  v-model="id"
                  placeholder="Ingrese Id de usuario"
                  id="id"
                />
              </b-form-group>

              <b-form-group label="Nombres" label-for="nombres">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="nombres"
                  placeholder="Ingrese nombres"
                  id="nombres"
                />
              </b-form-group>

              <b-form-group label="Apellidos" label-for="apellidos">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="apellidos"
                  placeholder="Ingrese apellidos"
                  id="apellidos"
                />
              </b-form-group>

              <b-form-group label="Correo" label-for="correo">
                <b-form-input
                  class="form-control"
                  type="email"
                  v-model="correo"
                  placeholder="Ingrese correo"
                  id="correo"
                />
              </b-form-group>

              <b-form-group label="Peso" label-for="peso">
                <b-form-input
                  class="form-control"
                  type="number" step="0.01"
                  v-model="peso"
                  placeholder="Ingrese peso (kg)"
                  id="peso"
                />
              </b-form-group>

              <b-form-group label="Estatura" label-for="estatura">
                <b-form-input
                  class="form-control"
                  type="number" step="0.01"
                  v-model="estatura"
                  placeholder="Ingrese estatura (metros)"
                  id="estatura"
                />
              </b-form-group>

  
            

             

              <br />
              <br />

              <b-button type="submit" variant="success" v-if="!enEdicion">Crear Usuario</b-button>
                <div v-if="edit == true">
                  <button @click="updateUser($event)" class="btn btn-success">Actualizar</button>
                  <button @click="cancelTask($event)" class="btn btn-danger">Cancelar</button>
                  </div>
            </b-form>
          </b-card>
        </b-col>
        <b-col>
          <div class="col-md-7">
            <div class="card mb-3" v-for="(id,index) in usuarios">
              <div class="card-body border bg-dark ">
                <div v-if="edit == false">
                  <h5 class="card-title text-white">ID: {{id.tipoid +". "+ id.id}}</h5>
                  <p class="card-text text-white">Nombres: {{id.nombres}}</p>
                  <p class="card-text text-white">Apellidos: {{id.apellidos}}</p>
                  <p class="card-text text-white">Correo: {{id.correo}}</p>
                  <p class="card-text text-white">Peso: {{id.peso}}</p>
                  <p class="card-text text-white">Estatura: {{id.estatura}}</p>
                  <p class="card-text text-white">IMC: {{id.imc}}</p>
                  <button class="btn btn-warning text-white" @click="editUser(id,index)">Editar</button>
                  <button class="btn btn-danger"  @click="deleteUser(index)">Eliminar</button>
                  <button class="btn btn-info"  @click="status(id,index)">Estado</button>
                </div>
                <div v-if="edit == true">
                  <h5 class="card-title text-white">ID: {{id.tipoid +". "+ id.id}}</h5>
                  <p class="card-text text-white">Nombres: {{id.nombres}}</p>
                  <p class="card-text text-white">Apellidos: {{id.apellidos}}</p>
                  <p class="card-text text-white">Correo: {{id.correo}}</p>
                  <p class="card-text text-white">Peso: {{id.peso}}</p>
                  <p class="card-text text-white">Estatura: {{id.estatura}}</p>
                  <p class="card-text text-white">IMC: {{id.imc}}</p>
                  <button disabled class="btn btn-warning text-white" @click="editUser(id,index)">Editar</button>
                  <button disabled class="btn btn-danger"  @click="deleteUser(id)">Eliminar</button>
                  <button disabled class="btn btn-info"  @click="status(id,index)">Estado</button>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="../assets/crud.js"/>