const ships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceships = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
    };
    ships.push(spaceships);
    alert(`A nave ${spaceships.name}, foi registrada.`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = ships.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceships) {
    if (spaceships.crew.length >= spaceships.crewLimit) {
        alert(`${member} não pode ser adicionado. Limite atingido`);
    }
    else {
        spaceships.crew.push(member);
        alert(`${member} foi adicionado à tripulação da ${spaceships.name}`);
    }
}
function sendInMission(spaceships) {
    if (spaceships.inMission) {
        alert(`${spaceships.name} não pode ser enviada. Nave já em missão`);
    }
    else if (spaceships.crew.length < Math.floor(spaceships.crewLimit / 3)) {
        alert(`${spaceships.name} não pode ser enviada. Tripulação insuficiente`);
    }
    else {
        spaceships.inMission = true;
        alert(`${spaceships.name} enviada para missão`);
    }
}
function firstMenuOption() {
    const name = prompt(`Qual o nome da nave a ser registrada ?`);
    const pilot = prompt(`Qual é o nome do pilot dá nave ${name} ?`);
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name} suporta ?`));
    const confirmation = confirm(`Confirma essas informações do registro da nave ? ${name}\nPiloto: ${pilot}\nLimite da Tripulação: ${crewLimit} `);
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const member = prompt('Qual é o nome do tripulante ?');
    const spaceShipName = prompt(`Pra qual nave o tripulante ${member} vai ser adicionado ?`);
    const spaceShip = findSpaceship(spaceShipName);
    if (spaceShip) {
        const confirmation = confirm(`Confirma a inclusão do menbro ${member} na tripulação da nave ${spaceShip.name}`);
        if (confirmation) {
            addCrewMember(member, spaceShip);
        }
    }
}
function thirdMenuOption() {
    const spaceShipName = prompt('Qual é o nome da nave que vai ser enviada ?');
    const spaceShip = findSpaceship(spaceShipName);
    if (spaceShip) {
        const confirmation = confirm(`Confirma o envio dessa nave de nome ${spaceShip.name}`);
        if (confirmation) {
            sendInMission(spaceShip);
        }
    }
}
function fourthMenuOption() {
    let list = 'Naves Registrada: \n';
    ships.forEach((spaceships) => {
        list += `
      Nave: ${spaceships.name}
      Pilot: ${spaceships.pilot}
      Em missão? ${spaceships.inMission ? 'Sim' : 'Não'} 
      Tamanho maximo da tripulação: ${spaceships.crewLimit}
      Tripulantes: ${spaceships.crew.length}
    `;
        spaceships.crew.forEach(member => {
            list += `   - ${member}\n`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
      1 - Registrar uma nova nave
      2 - Adicionar membro da tripulação
      3 - Enviar nave em missão
      4 - Listar naves registradas
      5 - Encerrar
    `;
    userOption = Number(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando Sistema');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal');
            break;
    }
}
