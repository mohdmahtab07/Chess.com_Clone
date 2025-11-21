export const PIECES = {
  K: "/wk.png", // White King
  Q: "/wq.png", // White Queen
  R: "/wr.png", // White Rook
  B: "/wb.png", // White Bishop
  N: "/wn.png", // White Knight
  P: "/wp.png", // White Pawn
  k: "/bk.png", // Black King
  q: "/bq.png", // Black Queen
  r: "/br.png", // Black Rook
  b: "/bb.png", // Black Bishop
  n: "/bn.png", // Black Knight
  p: "/bp.png", // Black Pawn
};

export type PieceSymbol = keyof typeof PIECES;
