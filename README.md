[![StepSecurity Maintained Action](https://raw.githubusercontent.com/step-security/maintained-actions-assets/main/assets/maintained-action-banner.png)](https://docs.stepsecurity.io/actions/stepsecurity-maintained-actions)

# read-file-action

A GitHub Action that reads a file and exposes its contents as a step output.

## Inputs

| Name   | Required | Default | Description                                                   |
|--------|----------|---------|---------------------------------------------------------------|
| `path` | Yes      | —       | Path to the file to read                                      |
| `trim` | No       | `false` | Trim leading and trailing whitespace from the file contents   |

## Outputs

| Name      | Description                  |
|-----------|------------------------------|
| `content` | The full contents of the file |

## Usage

```yaml
steps:
  - uses: actions/checkout@v6

  - name: Read file
    id: file
    uses: step-security/read-file-action@v1
    with:
      path: ./path/to/file.txt

  - name: Use file contents
    run: echo "${{ steps.file.outputs.content }}"
```

### With `trim`

```yaml
steps:
  - uses: actions/checkout@v6

  - name: Read version file
    id: version
    uses: step-security/read-file-action@v1
    with:
      path: ./VERSION
      trim: true

  - name: Use trimmed content
    run: echo "Version is ${{ steps.version.outputs.content }}"
```

## License

[MIT](LICENSE)
