import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: "hs0ekhkw",
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: "skXiRE2hc0MH5G3Mu18nlCY2OLBsP2HuT2WHAXRm0aZHQPFg6yeTDtAkrwxDB6qlNkx1RfrV0TQp05duYXbNNxHNE6Aa3WxC8MvoKLtm3ugiXHcwTgt3bDVib8sDcwgWSSigfCDAysdA7XkPADqskJHbYn94o2KsaC7FsATbu8hqsQ3hJ797",
    useCdn: false
})