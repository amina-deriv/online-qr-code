import VCard from 'vcard-creator';

export function generateVCard(user: any) {
    const vcf = new VCard()
    vcf
    .addName(user.lastName, user.firstName, undefined, user.title)
    .addCompany(user.company)
    .addJobtitle(user.position)
    .addEmail(user.email)
    .addPhoneNumber(user.contact,'PREF;WORK')
    .addAddress(user.address)
    .addURL(user.website)

    return vcf.toString()
}
export function downloadVCard(){
    
} 

