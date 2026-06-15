import * as core from '@actions/core'
import { readFile } from 'node:fs/promises'

interface ActionInputs {
  filePath: string
  trimWhitespace: boolean
}

function loadInputs(): ActionInputs {
  return {
    filePath: core.getInput('path', { required: true }),
    trimWhitespace: core.getBooleanInput('trim'),
  }
}

async function fetchContents(targetPath: string, trimOutput: boolean): Promise<string> {
  const rawData = await readFile(targetPath, { encoding: 'utf8' })
  return trimOutput ? rawData.trim() : rawData
}

async function run(): Promise<void> {
  const inputs = loadInputs()
  const result = await fetchContents(inputs.filePath, inputs.trimWhitespace)
  core.setOutput('content', result)
}

run().catch((err: Error) => core.setFailed(err.message))
