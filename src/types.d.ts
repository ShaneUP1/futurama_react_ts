
interface Character {
  Species: string,
  Age: string,
  Planet: string,
  Profession: string,
  Status: string,
  FirstAppearance: string,
  PicUrl: string,
  Relatives: string,
  VoicedBy: string,
  Name: string
}

interface match<P> {
  params: P
}

interface RouteComponentProps<P> {
  match: match<P>,
  location: H.Location,
  history: H.History,
  staticContext?: any
}

interface MatchParams {
  name:string
}