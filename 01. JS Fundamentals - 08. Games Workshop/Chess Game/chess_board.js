let NUMBER_OF_COLS = 8,
    NUMBER_OF_ROWS = 8,
    BLOCK_SIZE = 100;

let BLOCK_COLOUR_WHITE = '#ffffff',
    BLOCK_COLOUR_BLACK = '#504f4f',
    HIGHLIGHT_COLOUR = '#fb0006';

let PIECE_PAWN = 0,
    PIECE_CASTLE = 1,
    PIECE_HORSE = 2,
    PIECE_BISHOP = 3,
    PIECE_QUEEN = 4,
    PIECE_KING = 5,
    pieces = null,
    ctx = null,
    allFigures = null,
    canvas = null,
    BLACK_TEAM = 0,
    WHITE_TEAM = 1,
    SELECT_LINE_WIDTH = 5,
    currentTurn = WHITE_TEAM,
    selectedPiece = null;

function draw() {
    canvas = document.getElementById('chess');

    if (canvas.getContext) { // Canvas supported?
        ctx = canvas.getContext('2d');

        BLOCK_SIZE = canvas.height / NUMBER_OF_ROWS;

        drawBoard(); // Draw the background

        defaultPositions(); // Initialize all figures

        // Draw pieces
        pieces = new Image();
        pieces.src = 'pieces.png';
        pieces.onload = drawPieces;

        canvas.addEventListener('click', boardClicked, false);
    } else {
        alert("Canvas not supported!");
    }
}

function drawBoard() {
    for (let row = 0; row < NUMBER_OF_ROWS; row++) {
        for (let col = 0; col < NUMBER_OF_COLS; col++) {
            drawColumn(row, col);
        }
    }

    // Draw outline
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, NUMBER_OF_ROWS * BLOCK_SIZE, NUMBER_OF_COLS * BLOCK_SIZE);
}

function drawColumn(indexRow, indexCol) {
    // Set the background
    ctx.fillStyle = getBlockColour(indexRow, indexCol);
    // Draw rectangle for the background
    ctx.fillRect(indexRow * BLOCK_SIZE, indexCol * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);

    ctx.stroke();
}

function getBlockColour(indexRow, indexCol) {
    if (indexRow % 2) {
        return (indexCol % 2 ? BLOCK_COLOUR_WHITE : BLOCK_COLOUR_BLACK);
    } else {
        return (indexCol % 2 ? BLOCK_COLOUR_BLACK : BLOCK_COLOUR_WHITE);
    }
}

function drawPieces() {
    drawTeamOfPieces(allFigures.black, true);
    drawTeamOfPieces(allFigures.white, false);
}

function drawTeamOfPieces(teamFigures, isBlackTeam) {
    // Loop through each pieceCode and draw it on the canvas
    for (let i = 0; i < teamFigures.length; i++) {
        drawFigure(teamFigures[i], isBlackTeam);
    }
}

function drawFigure(figure, isBlackTeam) {
    let imageX = figure.pieceCode * BLOCK_SIZE;
    let imageY = isBlackTeam ? 0 : BLOCK_SIZE;

    // Draw the pieceCode onto the canvas
    ctx.drawImage(pieces, imageX, imageY, BLOCK_SIZE, BLOCK_SIZE, figure.col * BLOCK_SIZE,
        figure.row * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

function boardClicked(ev) {
    let x = ev.clientX - canvas.offsetLeft;
    let y = ev.clientY - canvas.offsetTop;
    let clickedBlock = {
        "row": Math.floor(y / BLOCK_SIZE),
        "col": Math.floor(x / BLOCK_SIZE)
    };

    if (selectedPiece === null) {
        checkIfPieceClicked(clickedBlock);
    } else {
        processMove(clickedBlock);
    }
}

function checkIfPieceClicked(clickedBlock) {
    let activeTeamFigures = (currentTurn === BLACK_TEAM ? allFigures.black : allFigures.white);
    let pieceAtBlock = getPieceAtBlockForTeam(activeTeamFigures, clickedBlock);

    if (pieceAtBlock !== null) {
        selectPiece(pieceAtBlock);
    }
}

function getPieceAtBlockForTeam(teamFigures, clickedBlock) {
    let curPiece = null;
    let pieceAtBlock = null;

    for (let i = 0; i < teamFigures.length; i++) {
        curPiece = teamFigures[i];
        if (curPiece.active && curPiece.col === clickedBlock.col && curPiece.row === clickedBlock.row) {
            curPiece.position = i;
            pieceAtBlock = curPiece;
            i = teamFigures.length;
        }
    }
    return pieceAtBlock;
}

function processMove(clickedBlock) {
    let activeTeamFigures = (currentTurn === BLACK_TEAM ? allFigures.black : allFigures.white);
    let pieceAtBlock = getPieceAtBlockForTeam(activeTeamFigures, clickedBlock);
    let enemyPiece = blockOccupiedByEnemy(clickedBlock);

    if (pieceAtBlock !== null) {
        removeSelection(selectedPiece);
        checkIfPieceClicked(clickedBlock);
    } else if (canSelectedMoveToBlock(selectedPiece, clickedBlock, enemyPiece)) {
        movePiece(clickedBlock, enemyPiece);
    }
}

function blockOccupiedByEnemy(clickedBlock) {
    let team = (currentTurn === BLACK_TEAM ? allFigures.white : allFigures.black);
    return getPieceAtBlockForTeam(team, clickedBlock);
}

function removeSelection(selectedPiece) {
    drawColumn(selectedPiece.col, selectedPiece.row);
    drawFigure(selectedPiece, (currentTurn === BLACK_TEAM));
}

function blockOccupied(clickedBlock) {
    let pieceAtBlock = getPieceAtBlockForTeam(allFigures.black, clickedBlock);

    if (pieceAtBlock === null) {
        pieceAtBlock = getPieceAtBlockForTeam(allFigures.white, clickedBlock);
    }

    return (pieceAtBlock !== null);
}

function canPawnMoveToBlock(selectedPiece, clickedBlock, enemyPiece) {
    let iRowToMoveTo = (currentTurn === WHITE_TEAM ? selectedPiece.row + 1 : selectedPiece.row - 1),
        bAdjacentEnemy = (clickedBlock.col === selectedPiece.col - 1 ||
            clickedBlock.col === selectedPiece.col + 1) &&
            enemyPiece !== null,
        bNextRowEmpty = (clickedBlock.col === selectedPiece.col &&
            blockOccupied(clickedBlock) === false);

    return clickedBlock.row === iRowToMoveTo &&
        (bNextRowEmpty === true || bAdjacentEnemy === true);
}

function canHorseMoveToBlock(selectedPiece, clickedBlock) {
    let canMoveLeft = clickedBlock.col === selectedPiece.col-2 && clickedBlock.row === selectedPiece.row+1;
    let canMoveLeftDown = clickedBlock.col === selectedPiece.col-1 && clickedBlock.row === selectedPiece.row+2;
    let canMoveLeftUp = clickedBlock.col === selectedPiece.col-2 && clickedBlock.row === selectedPiece.row-1;
    let canMoveRightDown = clickedBlock.col === selectedPiece.col+1 && clickedBlock.row === selectedPiece.row+2;
    let canMoveLeftUpUp = clickedBlock.col === selectedPiece.col-1 && clickedBlock.row === selectedPiece.row-2;
    let canMoveRightUpUp = clickedBlock.col === selectedPiece.col+1 && clickedBlock.row === selectedPiece.row-2;
    let canMoveRightUp = clickedBlock.col === selectedPiece.col+2 && clickedBlock.row === selectedPiece.row-1;
    return (canMoveLeft || canMoveLeftDown || canMoveLeftUp || canMoveRightDown ||
        canMoveLeftUpUp || canMoveRightUpUp || canMoveRightUp) // TODO
}
function  noFiguresBetween(selectedPiece,clickedBlock) {
    for (let i = selectedPiece.col; i > clickedBlock.col; i--) {
        for (let j = 0; j < allFigures.white.length; j++) {
            if (allFigures.white[i].row===selectedPiece.row&&allFigures.white[i].col >clickedBlock.col &&
                allFigures.white[i].col >selectedPiece.col) {
                return false;
            }
        }
        for (let j = 0; j < allFigures.black.length; j++) {
            if (allFigures.black[i].row===selectedPiece.row&&allFigures.black[i].col >clickedBlock.col &&
                allFigures.black[i].col >selectedPiece.col) {
                return false;
            }
        }
    }
    for (let i = selectedPiece.col; i > clickedBlock.col; i++) {
        for (let j = 0; j < allFigures.white.length; j++) {
            if (allFigures.white[i].row===selectedPiece.row&&allFigures.white[i].col < clickedBlock.col &&
                allFigures.white[i].col < selectedPiece.col) {
                return false;
            }
        }
        for (let j = 0; j < allFigures.black.length; j++) {
            if (allFigures.black[i].row===selectedPiece.row&&allFigures.black[i].col < clickedBlock.col &&
                allFigures.black[i].col < selectedPiece.col) {
                return false;
            }
        }
    }
    return true;
}

function  noFiguresBetweenCol(selectedPiece,clickedBlock) {
    for (let i = selectedPiece.row; i > clickedBlock.row; i--) {
        for (let j = 0; j < allFigures.white.length; j++) {
            if (allFigures.white[j].col===selectedPiece.col&&allFigures.white[j].row > clickedBlock.row &&
                allFigures.white[j].row < selectedPiece.row) {
                return false;
            }
        }
        for (let j = 0; j < allFigures.black.length; j++) {
            if (allFigures.black[j].col===selectedPiece.col&&allFigures.black[j].row > clickedBlock.row &&
                allFigures.black[j].row < selectedPiece.row) {
                return false;
            }
        }
    }
    for (let i = selectedPiece.col; i > clickedBlock.row; i++) {
        for (let j = 0; j < allFigures.white.length; j++) {
            if (allFigures.white[j].col===selectedPiece.col&&allFigures.white[j].row < clickedBlock.row &&
                allFigures.white[j].row > selectedPiece.row) {
                return false;
            }
        }
        for (let j = 0; j < allFigures.black.length; j++) {
            if (allFigures.black[j].col===selectedPiece.col&&allFigures.black[j].row < clickedBlock.row &&
                allFigures.black[j].row > selectedPiece.row) {
                return false;
            }
        }
    }
    return true;
}

function canCastleMoveToBlock(selectedPiece, clickedBlock, enemyPiece) {
    let canMoveLeftRight = selectedPiece.row === clickedBlock.row && noFiguresBetween(selectedPiece,clickedBlock)
    let canMoveUpDown = selectedPiece.col === clickedBlock.col && noFiguresBetweenCol(selectedPiece,clickedBlock)
    return (canMoveLeftRight||canMoveUpDown) // TODO
}

function canSelectedMoveToBlock(selectedPiece, clickedBlock, enemyPiece) {
    switch (selectedPiece.pieceCode) {
        case PIECE_PAWN:
            return canPawnMoveToBlock(selectedPiece, clickedBlock, enemyPiece)
        case PIECE_CASTLE:
            return canCastleMoveToBlock(selectedPiece, clickedBlock, enemyPiece)
        case PIECE_HORSE:
            return canHorseMoveToBlock(selectedPiece, clickedBlock)
        case PIECE_BISHOP:
            return // TODO
        case PIECE_QUEEN:
            return // TODO
        case PIECE_KING:
            return // TODO
    }
}

function selectPiece(pieceAtBlock) {
    // Draw outline
    ctx.lineWidth = SELECT_LINE_WIDTH;
    ctx.strokeStyle = HIGHLIGHT_COLOUR;
    ctx.strokeRect((pieceAtBlock.col * BLOCK_SIZE) + SELECT_LINE_WIDTH,
        (pieceAtBlock.row * BLOCK_SIZE) + SELECT_LINE_WIDTH,
        BLOCK_SIZE - (SELECT_LINE_WIDTH * 2),
        BLOCK_SIZE - (SELECT_LINE_WIDTH * 2));

    selectedPiece = pieceAtBlock;
}

function movePiece(clickedBlock, enemyPiece) {
    // Clear the block in the original position
    drawColumn(selectedPiece.col, selectedPiece.row);

    let team = (currentTurn === WHITE_TEAM ? allFigures.white : allFigures.black),
        opposite = (currentTurn !== WHITE_TEAM ? allFigures.white : allFigures.black);

    team[selectedPiece.position].col = clickedBlock.col;
    team[selectedPiece.position].row = clickedBlock.row;

    if (enemyPiece !== null) { // Clear the pieceCode your about to take
        drawColumn(enemyPiece.col, enemyPiece.row);
        opposite[enemyPiece.position].active = false;
    }

    // Draw the pieceCode in the new position
    drawFigure(selectedPiece, (currentTurn === BLACK_TEAM));

    currentTurn = (currentTurn === WHITE_TEAM ? BLACK_TEAM : WHITE_TEAM);

    selectedPiece = null;
}