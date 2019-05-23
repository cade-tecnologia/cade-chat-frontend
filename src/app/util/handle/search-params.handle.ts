import { SearchParams } from '../../interface/search-params.interface';

class SearchParamsHandle {
  private static readonly key: string = 'params';

  public static setParams(params?: SearchParams): void {
    localStorage.removeItem(this.key);
    const paramsString = JSON.stringify(this.paramsFactory(params));
    localStorage.setItem(this.key, paramsString);
  }

  public static getParams(): SearchParams {
    return JSON.parse(localStorage.getItem(this.key))
  }

  public static buildParams(page: number, limit?: number): SearchParams {
    return Object.assign({} as SearchParams, {
      page: page || '1',
      limit: limit || '5',
    })
  }

  private static paramsFactory(param: SearchParams | undefined): SearchParams {
    if (param) {
      const { page, limit } = param;
      return Object.assign({} as SearchParams, {
        page,
        limit,
        })
    }

    return Object.assign({} as SearchParams, {
      page: 1,
      limit: 5,
    })
  }
}

export default SearchParamsHandle;
