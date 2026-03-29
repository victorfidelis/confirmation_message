let params = new URLSearchParams(window.location.search)
let project = params.get('project')

if (project && project.toUpperCase() == 'PRESTADOR_SERVICO') {
    document.getElementById('project-specific-message').textContent = 
    'Agora você já pode acessar todas as funcionalidades do app Prestador de Serviço.'
}
