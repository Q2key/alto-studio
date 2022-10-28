import express from 'express'

const app = express()

interface BaseParams<IDType = number> {
    id: IDType
}

interface DogDetails {
    name: string
    breed: DogBreed
    adopted_at: Date | null
    birth_date: Date | null
}

interface APIResponse<Data> {
    data: Data
    message: string
}

interface Pagination {
    page: number
    limit: number
    breed: DogBreed
}

interface Empty {

}

type DogBreed = 'labrador' | 'german shepherd' | 'golden retriever'

type Dog = BaseParams & DogDetails

app.get<Empty, APIResponse<Dog[]>, Empty, Pagination>('/api/v1/users', (req, res) => {
    res.send({ data: [{ id: 1, name: 'Sharik', breed: 'labrador', adopted_at: null, birth_date: null }], message: 'ok' })
})

const port = 8080;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})