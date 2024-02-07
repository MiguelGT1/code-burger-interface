import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import {
  Container,
  Label,
  Input,
  ButtomStyles,
  LabelUpload,
  ContainerInput,
} from './styles'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const history = useHistory()

  const location = useHistory().location
  const product = location.state ? location.state.product : null

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do Produto'),
    price: Yup.string().required('Digite o preço do Produto'),
    category: Yup.object().required('Escolha uma categoria'),
    offer: Yup.bool(),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async data => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])
    productDataFormData.append('offer', data.offer)

    await api.put(`/products/${product.id}`, productDataFormData)
    try {
      await toast.success('Editado com sucesso!')
    } catch (error) {
      await toast.error('Falha ao editar o produto')
    }

    setTimeout(() => {
      history.push('/listar-produtos') // Corrigindo a chamada de push
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={product ? product.name : ''}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register('price')}
            defaultValue={product ? product.price : ''}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do produto
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name || '')
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name="category"
            control={control}
            defaultValue={product ? product.category : ''}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  placeholder="Categorias"
                  defaultValue={product ? product.category : ''}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ContainerInput>
          <input
            type="checkbox"
            {...register('offer')}
            defaultChecked={product.offer}
          />
          <Label>Produto em oferta?</Label>
        </ContainerInput>

        <ButtomStyles>Editar produto</ButtomStyles>
      </form>
    </Container>
  )
}

export default EditProduct
