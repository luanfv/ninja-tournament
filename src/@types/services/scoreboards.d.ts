interface IServiceScoreboardsGetResponse {
  id: string;
  winner: string;
  length: number;
  battles: IBattle[][];
}

interface IServiceScoreboardsPostRequest {
  competitors: INinjaCompetitor[];
  winner: INinjaCompetitor;
  battles: IBattle[][];
}

export { IServiceScoreboardsGetResponse, IServiceScoreboardsPostRequest };
