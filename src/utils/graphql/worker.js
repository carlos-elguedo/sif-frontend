import { gql } from 'apollo-boost';

const fragments = {
  commonFields: gql`
    fragment SearchWorker on worker {
      id
      firstName
      lastName
      idUser
      name
      status
      data_register
      type
      email
      phone
      address
      profileImage
    }
    fragment WorkerProfession on profession {
      id
      codeGroup
      name_es
      name_en
      city
      cod
      description
    }
  `
};

export const SEARCH_WORKER = gql`
  query searchWorkers($data: findWorkerInput) {
    searchWorkers(data: $data) {
      workers {
        ...SearchWorker
        profession {
          ...WorkerProfession
        }
      }
    }
  }
  ${fragments.commonFields}
`;
