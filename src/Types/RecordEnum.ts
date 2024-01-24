enum EmailStatus {
    Read = 'READ',
    Unread = 'UNREAD',
    Draft = 'DRAFT',
  }

type Status = Record<EmailStatus, string>

const email : Status = {
  [EmailStatus.Read] : "toto",
  [EmailStatus.Unread] : "toto",
  [EmailStatus.Draft] : "toto"
}
console.log("emeil: ", email)