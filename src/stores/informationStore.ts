import { makeAutoObservable, toJS } from "mobx";

interface DependentesData {
  nome: string;
  telefone: string;
}

interface InformationData {
  nome: string;
  email: string;
  telefone: string;
  dependentes: DependentesData[];
}

export class InformationStore {
  data: InformationData = {
    nome: "",
    telefone: "",
    email: "",
    dependentes: [
      {
        nome: "",
        telefone: "",
      },
      {
        nome: "",
        telefone: "",
      },
    ],
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setNome(nome: InformationData["nome"]) {
    this.data.nome = nome;
  }

  setTelefone(telefone: InformationData["telefone"]) {
    this.data.telefone = telefone;
  }

  setEmail(email: InformationData["email"]) {
    this.data.email = email;
  }

  setDependentes(dependentes: InformationData["dependentes"]) {
    this.data.dependentes = dependentes;
  }

  addDepentente(dependente: DependentesData) {
    this.data.dependentes.push(dependente);
  }

  toJson() {
    return toJS(this.data);
  }
}

const informationStore = new InformationStore();

export default informationStore;
