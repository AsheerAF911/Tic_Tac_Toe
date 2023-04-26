const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return <div>Player({winner}) is the Winner</div>;
    }

    if (!winner && noMovesLeft) {
      return <div>Match was Draw</div>;
    }

    if (!winner && !noMovesLeft) {
      return <div>Next player is Player({nextPlayer})</div>;
    }

    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
