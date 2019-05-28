---
title: 파이썬 가상 개발환경 관리하기
date: "2019-05-20T23:05:32.169Z"
template: "post"
draft: false
slug: "/posts/manage-python-virtual-environment"
category: "Python"
description: "파이썬 가상 개발환경 관리 및 패키지 사용방법"
---

파이썬의 다양한 패키지들은 각각 다양한 버전을 갖고 있고, 각 패키지와 호환되는 파이썬 버전이 존재한다. 따라서 한 대의 컴퓨터로 여러 파이썬 프로그램을 돌릴 경우 파이썬 패키지와 호환되지 않는 버전의 인터프리터가 충돌로 프로그램이 정상적으로 돌아가지 않을 수 있다.

파이썬 어플리케이션 별로 독립된 환경을 설정하여 해결할 수 있는데, 어플리케이션 환경을 가상화 하는 방법을 통해 이 문제를 해결할 수 있다. 



## pyenv [[link]](https://github.com/pyenv/pyenv#basic-github-checkout)

### Installation

1. **Github에서 pyenv 설치**

   ```bash
   $ git clone https://github.com/pyenv/pyenv.git ~/.pyenv
   ```

   

2. **pyenv ropo가 복사된 경로를 `PYENV_ROOT` 로 지정해주고 `$PATH` 에 `$PYENV_ROOT/bin` 을 추가하여 터미널에서 접속 가능하게 환경 설정**

   ```bash
   $ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
   $ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
   ```

   - Zsh note : `~/.bash_profile` 대신에 `~/.zshenv`  를 수정

   - Ubunttu and Fedora note : `~/.bash_profile` 대신에 `~/.bashrc` 를 수정

   - Proxy note : `http_proxy` 와 `HTTP_PROXY` 모두 export

     

3. **shim과 autocompletion을 가능하게 하기 위해 shell에 `pyenv init` 을 추가.  `eval "$(pyenv init -)"` 가 초기화 중에 PATH를 조작하기 때문에 shell 구성 파일의 맨 끝 부분에 정의.**

   ```bash
   $ echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bash_profile
   ```

   

4. **Shell을 재시작 하고 변경된 PATH를 반영**

   ```bash
   $ exec "$SHELL"
   ```

   

5. **`$(pyenv root)/versions` 에 파이썬 버전 설치**

   ```bash
   $ pyenv install <python specific version>
   ```



### Uninstalling

1. **파이썬 버전 삭제**

   1. 방법 1

      ```bash
      $ pyenv uninstall <python specific version>
      ```

   2. 방법 2

      ```bash
      $ rm -rf $(pyenv root)/versions/<python specific version>
      ```

      

2. **pyenv 삭제**

   1. 방법 1

      ```bash
      $ pyenv init
      $ rm -rf $(pyenv root)
      ```

   2. 방법 2

      ``` bash
      $ brew uninstall pyenv 
      ```

      

<br>

## pyenv-virtualenv

### Installation

1. **Github에서 pyenv-virtualenv 설치**

   ```bash
   $ git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
   ```



2. **(선택) `pyenv virtualenv-init` 코드를 추가하여 가상환경 실행을 편하게 한다.**

   ```bash
   $ echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bash_profile
   ```

   

3. **pyenv-virtualenv를 사용하기 위해 shell을 재실행**

   ```bash
   $ exec "$SHELL"
   ```

   

**※ Installing with Homebrew (for macOS)**

```bash
$ brew install pyenv-virtualenv

$ eval "$(pyenv init -)"
$ eval "$(pyenv virtualenv-init -)"
```

