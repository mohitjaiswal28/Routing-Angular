# Angular Routing 🌐

```
Angular routing is a powerful feature that allows you to navigate between different components or modules within your Angular application. It provides a seamless user experience by dynamically updating the content without reloading the entire page
```

## Path vs Query Parameters

![Path vs Query Param](./Path_Query_Param.png)

- [For more detail, read this Medium article by @AveryCS
  ](https://medium.com/@averydcs/understanding-path-variables-and-query-parameters-in-http-requests-232248b71a8)

# 1. Path Parameters 📍

### 1.1 Passing path parameter in routes:

```
<a [routerLink] = ['book', bookID, 'author', authorID]>
```

```
const routes: Routes = [
    {path: 'books/:boodID/author/"authorID', component: BookComponent}
]
```

### 1.2 Retrieving path parameter from routes:

There are two ways for retrieving the path param from the routes:

- `snapshot` (for static route till the component is active and no change in route)
- `observable` (for dynamic route)

- Using snapshot 📸

```
this.bookIDfromRoutes = this.routes.snapshot.paramMap.get('bookID')
this.bookIDfromRoutes = this.routes.snapshot.params['bookID']
```

- Using observable 📡

```
this.routes.paramMap.subscribe(params => {
    this.bookIDfromRoutes = params.get('bookID')
})

this.routes.params.subscribe(params => {
    this.bookIDfromRoutes = params['bookID']
})
```

# 2. Query Parameters 🔍

### 2.1 Passing query parameter in routes:

```
<a [routerLink] = "['product']" [queryParams]={search: searchValue}>
```

```
const routes: Routes = [
    {path: 'product', component: ProductComponent}
]
```

### 2.2 Retrieving query parameter from routes:

There are two ways for retrieving the path param from the routes:

- `snapshot` (for static route till the component is active and no change in route)
- `observable` (for dynamic route)

- Using snapshot 📸

```
this.product = this.routes.snapshot.queryParamMap.get('search')
this.product = this.routes.snapshot.queryParams['search']
```

- Using observable 📡

```
this.routes.queryParamMap.subscribe(params => {
    this.product = params.get('search')
})

this.routes.queryParams.subscribe(params => {
    this.product = params['search']
})
```
