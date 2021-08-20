interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Brendo',
        email: 'brendo@brendo.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}