const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Player{' '}
          <span className={`${winner === 'X' ? 'text-green' : 'text-orange'}`}>
            ({winner})
          </span>{' '}
          is the Winner
        </>
      );
    }

    if (!winner && noMovesLeft) {
      return <div>Match was Draw</div>;
    }

    if (!winner && !noMovesLeft) {
      return (
        <>
          Next player is Player{' '}
          <span
            className={`${nextPlayer === 'X' ? 'text-green' : 'text-orange'}`}
          >
            ({nextPlayer})
          </span>
        </>
      );
    }

    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
