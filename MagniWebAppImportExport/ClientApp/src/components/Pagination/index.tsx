import { usePagination, UsePaginationProps, DOTS } from '../../hooks/usePagination'

export interface PaginationProps extends UsePaginationProps {
  onPageChange: any
}


const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  // Se houver menos que 2 vezes no intervalo de paginação, não renderizamos o componente
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]
  return (
    <div className="pagination">
      <ul>
        {/* Seta de navegação da esquerda */}
        {currentPage !== 1 && (
          <li className='first-item'  onClick={onPrevious}>
            <div><span className='icon icon-arrow-down'></span></div>
          </li>
        )}
        {paginationRange.map((pageNumber: any) => {
          // Se o pageItem for um PONTO (DOT), renderize o caractere unicode DOTS
          if (pageNumber === DOTS) {
            return <li key={pageNumber}>&#8230;</li>
          }

          // Renderize a amostra de página
          return (
            <li
              className={pageNumber === currentPage ? 'active' : ''}
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        })}
        {/*  Seta de navegação da direita */}
        {currentPage !== lastPage && (
          <li className='last-item' onClick={onNext}>
            <div><span className='icon icon-arrow-down'></span></div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Pagination
