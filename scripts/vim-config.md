My Vim Configurations
```bash
" disable vi compatibility
set nocompatible
set wrap

" syntax on

" forces plugins to load correctly
" filetype off

set relativenumber
set number

" set ruler
" set visualbell

set encoding=utf-8

set wrap

set tabstop=4
set shiftwidth=4

set autoindent

call plug#begin('~/.vim/plugged')
 "Autocomplete plugin. similar to VSCode
  Plug 'neoclide/coc.nvim', {'branch': 'release'}
call plug#end()
```
